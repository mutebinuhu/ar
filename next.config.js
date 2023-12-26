/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'care.arssolutionsltd.co.uk',
          port: '',
          pathname: '/assets_web/**',
        },
      ],
}

module.exports = nextConfig
