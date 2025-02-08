<h1 align="center">
  Fortune George's Portfolio Website
</h1>
<p align="center">
This project is a digital marketing professional's portfolio website, showcasing his expertise in the field. The website is hosted on <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html" target="_blank">Amazon Simple Storage Service (Amazon S3)</a> and built with <a href="https://reactrouter.com/start/home" target="_blank">React Router 7 (framework)</a>.
</p>

![demo](./public/images/og.png)

## Features

- **Responsive Design**: Optimized for various screen sizes to ensure a seamless user experience across devices.</li>
- **React Router 7**: Enables fast and intuitive navigation between portfolio sections.</li>
- **Static Hosting on S3**: Efficient and cost-effective hosting with high availability.</li>
- **CI/CD**: Automated deployments triggered on push to `master` branch, ensuring the site is always up to date.</li>

## Deployment Workflow

The deployment pipeline is managed via GitHub Actions, using Terraform to define infrastructure as code (IaC). Each new build:

- Syncs the latest content and updates the storage bucket.
- Removes outdated files to ensure a clean deployment.

### Link (TBA)

---

### Previous iterations:

- [v1](https://fortune-george.vercel.app/): Initial website built with Next.js.

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
