/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  basePath: process.env.APP_BASEPATH,
  env: {
    basePath: process.env.APP_BASEPATH,
  }
}

module.exports = nextConfig
