/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages: add basePath: '/repo-name' if not deploying to a root domain
  // Vercel: remove the two lines above for native image optimization
};

export default nextConfig;
