/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

//  basePath: '/',
module.exports = {
  assetPrefix: isProd ? './' : '',
  reactStrictMode: true,
  images: {
    domains: ['localhost' , 'raw.githubusercontent.com'],
  },
}
