/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self'; 
  img-src 'self' https://maps.googleapis.com https://maps.gstatic.com data:; 
  script-src 'self' 'unsafe-inline' 'unsafe-eval' 'nonce-${process.env.DEV_NONCE}' maps.googleapis.com https://www.googletagmanager.com; 
  connect-src 'self' https://opendata.cwb.gov.tw https://www.google-analytics.com https://www.analytics.google.com https://www.googletagmanager.com https://maps.googleapis.com https://maps.gstatic.com data:; 
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
  object-src 'none'; 
  base-uri 'self'; 
  font-src 'self' https://fonts.gstatic.com;
`.replace(/\s{2,}/g, ' ').trim();

const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    unoptimized: true,
  },
  // `next export` Unsupported Feature
  headers: async () => {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // {
          //   key: 'Content-Security-Policy',
          //   value: ContentSecurityPolicy
          // },
        ],
      },
    ]
  },
}

module.exports = nextConfig
