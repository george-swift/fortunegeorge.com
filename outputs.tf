output "bucket_website_url" {
  value = aws_s3_bucket.react_router_site.website_endpoint
  description = "Static website URL"
}
