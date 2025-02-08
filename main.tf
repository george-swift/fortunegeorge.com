terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.5.0"
    }
  }
}

provider "aws" {
  region = var.bucket_region
}

# Primary bucket for the subdomain
resource "aws_s3_bucket" "www_bucket" {
  bucket = var.sub_domain_bucket_name
}

resource "aws_s3_bucket_ownership_controls" "www_ownership" {
  bucket = aws_s3_bucket.www_bucket.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "www_public_access" {
  bucket = aws_s3_bucket.www_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_website_configuration" "www_web_config" {
  bucket = aws_s3_bucket.www_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

# Redirect bucket for the root domain
resource "aws_s3_bucket" "root_bucket" {
  bucket = var.root_domain_bucket_name
}

resource "aws_s3_bucket_website_configuration" "root_redirect_config" {
  bucket = aws_s3_bucket.root_bucket.id

  redirect_all_requests_to {
    host_name = aws_s3_bucket.www_bucket.bucket
    protocol  = "https"
  }
}

# Create an Origin Access Identity (OAI) for CloudFront
resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "OAI for S3 bucket access"
}

# Bucket policy to restrict access to CloudFront OAI
resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.www_bucket.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid       = "AllowCloudFrontAccess",
        Effect    = "Allow",
        Principal = { AWS = aws_cloudfront_origin_access_identity.oai.iam_arn },
        Action    = "s3:GetObject",
        Resource  = "arn:aws:s3:::${var.sub_domain_bucket_name}/*"
      }
    ]
  })
}

module "template_files" {
  source   = "hashicorp/dir/template"
  base_dir = "${path.module}/build/client"
}

# Upload site files
resource "aws_s3_object" "object" {
  bucket         = aws_s3_bucket.www_bucket.id

  for_each       = module.template_files.files
  key            = each.key
  content_type   = each.value.content_type

  source         = each.value.source_path
  content        = each.value.content

  etag           = each.value.digests.md5
}

# CloudFront Distribution for the subdomain
resource "aws_cloudfront_distribution" "www_distribution" {
  origin {
    domain_name = aws_s3_bucket.www_bucket.bucket_regional_domain_name
    origin_id   = "S3-www-origin"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.oai.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  aliases = [var.sub_domain_bucket_name]

  viewer_certificate {
    acm_certificate_arn      = var.acm_certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-www-origin"

    viewer_protocol_policy = "redirect-to-https"
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6" # AWS Managed CachingOptimized Policy
  }
}

# CloudFront Distribution for root domain (Redirecting to www)
resource "aws_cloudfront_distribution" "root_distribution" {
  origin {
    domain_name = aws_s3_bucket_website_configuration.root_redirect_config.website_endpoint
    origin_id   = "S3-root-origin"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  enabled         = true
  is_ipv6_enabled = true
  aliases         = [var.root_domain_bucket_name]

  viewer_certificate {
    acm_certificate_arn      = var.acm_certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-root-origin"

    viewer_protocol_policy = "redirect-to-https"
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6" # AWS Managed CachingOptimized Policy
  }
}
