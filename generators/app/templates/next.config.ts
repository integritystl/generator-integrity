import type { NextConfig } from 'next'
import version from './package.json'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  publicRuntimeConfig: {
    version,
  },
}

export default nextConfig
