/** @type {import('next').NextConfig} */
// Project pages (https://<user>.github.io/<repo>/) are served from a sub-path.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
