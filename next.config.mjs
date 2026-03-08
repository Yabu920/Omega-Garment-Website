import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Prevent Turbopack from inferring parent folders as workspace root.
    root: __dirname,
  },
  images: {
    // Required for static export (`output: 'export'`).
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  // Static site generation
  output: 'export',
  // Disable server-side features for static export
  trailingSlash: true,
};

export default nextConfig;
