# Deploying Kether Landing Page to Vercel

This document provides step-by-step instructions for deploying the Kether landing page to Vercel using two different methods: Vercel CLI and GitHub integration.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- npm or yarn package manager
- [Vercel account](https://vercel.com/signup)

## Build Configuration

The Kether landing page is built with Vite and outputs to the `dist` directory. Vercel needs to know these settings:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework Preset**: `vite`

## Method A: Deploy with Vercel CLI

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Login to Vercel

```bash
vercel login
```

### 3. Deploy the Project

Navigate to the project directory and run:

```bash
cd /path/to/kether-landing
vercel
```

During the interactive setup:
- Confirm you want to deploy the current directory
- Link to an existing project or create a new one
- When asked about build settings, use:
  - Build Command: `npm run build`
  - Output Directory: `dist`
  - Development Command: `npm run dev`

### 4. Deploy to Production

After testing the preview deployment, deploy to production:

```bash
vercel --prod
```

## Method B: Deploy with GitHub + Vercel

### 1. Push Your Code to GitHub

```bash
# Initialize git repository if not already done
git init
git add .
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/kether-landing.git
git push -u origin main
```

### 2. Import Project in Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" > "Project"
3. Select your GitHub repository
4. Configure project:
   - Framework Preset: Select "Vite"
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Root Directory: `./` (or leave blank)
5. Click "Deploy"

### 3. Configure Environment Variables (if needed)

If your project requires environment variables:
1. Go to your project in the Vercel dashboard
2. Navigate to "Settings" > "Environment Variables"
3. Add any required variables

## Custom Domain Setup

To add a custom domain to your Vercel deployment:

1. Go to your project in the Vercel dashboard
2. Navigate to "Settings" > "Domains"
3. Add your domain and follow the verification steps

## Continuous Deployment

With the GitHub integration, Vercel will automatically deploy:
- Every push to the main branch (production)
- Every pull request (preview deployment)

## Troubleshooting

If you encounter build issues:

1. Check the build logs in the Vercel dashboard
2. Ensure all dependencies are correctly installed
3. Verify that the build command and output directory are correctly set
4. Check that your project builds locally with `npm run build`

For more help, refer to [Vercel Documentation](https://vercel.com/docs) or contact Vercel support.
