# My Portfolio Website

A modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Important Notes

### Logo Image
The website is configured to use a logo image located at `/public/images/logo.svg`. 

The logo is a blue shield design with a white square and chevron (V shape). The website includes:
- An SVG version at: `/public/images/logo.svg` that's ready to use
- A helper HTML file at `/public/save-logo.html` that shows the logo and provides instructions

If you want to use your own logo:
1. Replace the SVG file with your own logo (SVG format recommended)
2. Ensure it has a similar design aesthetic to maintain visual consistency
3. If using PNG format instead, update all image paths from `logo.svg` to `logo.png` in the components

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
