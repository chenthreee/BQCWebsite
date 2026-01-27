/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.8.96:3000","http://192.168.34.74:3000","http://192.168.34.228:3000","http://120.79.255.132:3000"],
  images: {
    domains: ['localhost', '192.168.8.97', '192.168.34.74'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.8.97',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.34.74',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.34.228',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '120.79.255.132',
        port: '1337',
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
