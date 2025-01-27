variable "bucket_region" {
  description = "The region of the S3 bucket"
  type = string
  default = "us-east-1"
}

variable "bucket_name" {
  description = "The name of the S3 bucket"
  type        = string
}
