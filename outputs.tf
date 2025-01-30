output "bucket_website_url" {
  value = aws_s3_bucket_website_configuration.web_config.website_endpoint
  description = "Static website URL"
}
