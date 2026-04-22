/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  allowedDevOrigins
  //output: 'export',        как закончу раскоментить
  //basePath: '/PEC',        как закончу раскоментить
}

export default nextConfig