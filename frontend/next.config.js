/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.8.96:3000"],
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  // i18n: {
  //   locales: ['zh-Hans', 'en'],
  //   defaultLocale: 'zh-Hans',
  //   localeDetection: false,
  // }
  async rewrites() {
    return [
      {
        source: '/:path*.html',
        destination: '/:path*',
      },
    ]
  },
}

module.exports = nextConfig
