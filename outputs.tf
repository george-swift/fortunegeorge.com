output "www_bucket_website_url" {
  value       = aws_s3_bucket_website_configuration.www_web_config.website_endpoint
  description = "Static website URL for the subdomain"
}

output "root_bucket_redirect_url" {
  value       = aws_s3_bucket_website_configuration.root_redirect_config.website_endpoint
  description = "Redirect URL for the root domain"
}

output "www_cloudfront_url" {
  value       = aws_cloudfront_distribution.www_distribution.domain_name
  description = "CloudFront URL for the subdomain"
}

output "root_cloudfront_url" {
  value       = aws_cloudfront_distribution.root_distribution.domain_name
  description = "CloudFront URL for the root domain"
}