/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['0.gravatar.com', '2.gravatar.com', 'secure.gravatar.com', 'ztelco-blog.sofi-market.com', 'zt-blog.ztelco.com']
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
