terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
}

provider "aws" {
  region = var.bucket_region
}

resource "aws_s3_bucket" "react_router_site" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_ownership_controls" "ownership" {
  bucket = aws_s3_bucket.react_router_site.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = aws_s3_bucket.react_router_site.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "bucket_access" {
  depends_on = [
    aws_s3_bucket_ownership_controls.ownership,
    aws_s3_bucket_public_access_block.public_access,
  ]

  bucket = aws_s3_bucket.react_router_site.id
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.react_router_site.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid       = "PublicReadGetObject",
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "arn:aws:s3:::${var.bucket_name}/*"
      }
    ]
  })
}

module "template_files" {
  source   = "hashicorp/dir/template"
  base_dir = "${path.module}/build/client"
}

resource "aws_s3_bucket_website_configuration" "web_config" {
  bucket = aws_s3_bucket.react_router_site.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_object" "object" {
  bucket         = aws_s3_bucket.react_router_site.id

  for_each       = module.template_files.files
  key            = each.key
  content_type   = each.value.content_type

  source         = each.value.source_path
  content        = each.value.content

  etag           = each.value.digests.md5
}
