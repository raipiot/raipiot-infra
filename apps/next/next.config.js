const { bootstrapLog } = require('@raipiot-infra/bootstrap-animation')

// TODO: Now, bootstrap log will run twice, try to find a way to fix it.
bootstrapLog()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '127.0.0.1',
        port: '',
        pathname: '/img/**'
      }
    ]
  }
}
module.exports = nextConfig
