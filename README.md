# **Fortune George's Portfolio Website**

This project is a **bespoke** portfolio website designed for a digital marketing professional, showcasing expertise in brand storytelling, audience engagement, and data-driven marketing strategies. The website blends elegant design with enterprise-grade AWS infrastructure to ensure speed, security, and scalability.

## 🌐 **Live Website**

🔗 **[www.fortunegeorge.com](https://www.fortunegeorge.com)**

![demo](./public/images/og.png)

## **🚀 Features**

- **Sleek & Responsive Design** – Modern UI with seamless cross-device experience.
- **React Router 7** – Lightning-fast navigation for a single-page app feel.
- **CloudFront + S3 Hosting** – Low-latency global distribution via AWS CDN.
- **Custom Domain on Route 53** – Professionally registered and managed for reliability.
- **HTTPS via ACM** – Automatic SSL/TLS certificates for secure connections.
- **Optimized Performance** – Images served in next-gen (WebP) format to provide better compression.
- **CI/CD with GitHub Actions** – Push-to-deploy workflow with Terraform-managed infrastructure.
- **Instant Updates** – CloudFront cache invalidation ensures real-time content refresh.

---

## **📡 Deployment Workflow**

The site follows **a fully automated DevOps pipeline** using **Infrastructure as Code (IaC)** for consistent deployments:

1. **Terraform** provisions and maintains the AWS infrastructure (S3, CloudFront, Route 53, ACM).
2. **GitHub Actions** automates deployments on each push to `master`.
3. **CloudFront Cache Invalidation** ensures visitors always see the latest version.

### **Tech Stack**

- **Frontend:** React + React Router 7 + TypeScript + Tailwind
- **Hosting:** AWS S3 + CloudFront
- **Infrastructure:** Terraform (IaC)
- **CI/CD:** GitHub Actions
- **Domain Management:** AWS Route 53
- **Security:** AWS ACM for SSL/TLS

---

## **🛠 Installation & Local Development**

1. Install dependencies:

   ```sh
   npm install

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
