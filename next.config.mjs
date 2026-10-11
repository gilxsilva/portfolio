/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Album art hosts for lib/onRepeat.ts (Spotify and Apple Music).
    remotePatterns: [
      { protocol: 'https', hostname: 'i.scdn.co' },
      { protocol: 'https', hostname: '*.mzstatic.com' },
    ],
  },
};

export default nextConfig;
