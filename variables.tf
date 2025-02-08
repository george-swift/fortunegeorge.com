variable "bucket_region" {
  description = "The region of the S3 bucket"
  type = string
  default = "us-east-1"
}

variable "acm_certificate_arn" {
  description = "The ARN of the ACM certificate"
  type        = string
}

variable "root_domain_bucket_name" {
  description = "The name of the S3 bucket for the root domain"
  type        = string
}

variable "sub_domain_bucket_name" {
  description = "The name of the S3 bucket to host the subdomain"
  type        = string
}