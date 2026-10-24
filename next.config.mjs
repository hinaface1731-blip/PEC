/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  allowedDevOrigins: ['192.168.175.1'],
}

export default nextConfig
