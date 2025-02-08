# Fortune George's Portfolio Website

This project is a digital marketing professional's portfolio website, showcasing his expertise in the field. The website is hosted on [Amazon CloudFront](https://aws.amazon.com/cloudfront/) with an origin in [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html) and secured via [AWS Certificate Manager (ACM)](https://docs.aws.amazon.com/acm/latest/userguide/).

## 🌐 Live Website

🔗 **[www.fortunegeorge.com](https://www.fortunegeorge.com)**

![demo](./public/images/og.png)

## Features

- **Responsive Design**: Optimized for various screen sizes to ensure a seamless user experience.
- **React Router 7**: Enables fast and intuitive navigation between portfolio sections.
- **CloudFront + S3 Hosting**: High-performance static site hosting with low latency.
- **HTTPS via ACM**: Secure SSL/TLS termination with automatic certificate renewal.
- **CI/CD**: Automated deployments triggered on push to `master` branch, ensuring the site is always up to date.

## Deployment Workflow

The deployment pipeline is managed via GitHub Actions, using Terraform to define infrastructure as code (IaC). Each new build:

- Syncs the latest content and updates the S3 bucket.
- Invalidates the CloudFront cache for instant updates.
- Ensures HTTPS enforcement via ACM.

---

## 🛠 Installation & Set Up

1. Install dependencies

   ```sh
   npm i

   ```

2. Start the development server

   ```sh
   npm run dev
   ```

## 🚀 Building for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```
