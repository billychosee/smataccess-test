/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add image domains if using external images
    unoptimized: false, // Set to true if using static export
  },
  // Add any other Next.js specific configurations here
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig