/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['ui'],
  images: {
    domains: ['assets-global.website-files.com'],
  },
  output: 'standalone',
};

module.exports = nextConfig;
