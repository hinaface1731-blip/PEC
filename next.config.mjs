/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  images: { 
    unoptimized: false,  // ← убедитесь, что false (или удалите эту строку)
    formats: ['image/avif', 'image/webp'],  // ← конвертация в AVIF и WebP
  },
  allowedDevOrigins: ['192.168.175.1'],
}

export default nextConfig