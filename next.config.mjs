/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: { unoptimized: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/myenvironment/**',
      },
    ],
  },
  // output: 'export', // static export. See https://nextjs.org/docs/app/building-your-application/deploying/static-exports & https://nextjs.org/docs/app/api-reference/next.config.js
  reactStrictMode: true,
}

export default nextConfig
