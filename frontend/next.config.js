/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.8.96:3000","http://192.168.34.74:3000","http://192.168.34.228:3000","http://120.79.255.132:3000"],
  images: {
    domains: ['localhost', '192.168.8.97', '192.168.34.74', 'api.bqcdz.com', 'www.bqcdz.com'],
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
        protocol: 'https',
        hostname: 'api.bqcdz.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.bqcdz.com',
        port: '',
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
  async headers() {
    return [
      {
        // 精确匹配 /zh-Hans 这一个页面，告诉搜索引擎不收录
        source: '/zh-Hans',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, follow',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // 将 /zh-Hans 根路径 301 重定向到 /（避免SEO重复内容）
      {
        source: '/zh-Hans',
        destination: '/',
        permanent: true, // 301
      },
    ]
  },
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
