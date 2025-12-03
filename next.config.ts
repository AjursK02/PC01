import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // ✅ Added Pexels image domain
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.gettyimages.in', // ✅ Added Pexels image domain
        port: '',
        pathname: '/**',
      },
      { protocol: 'https', hostname: 'media.gettyimages.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'media.istockphoto.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'i0.wp.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'www.cm-today.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'plasticrecyclingconference.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'jiantai.io', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'thumbs.dreamstime.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'cached.imagescaler.hbpl.co.uk', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'unitedpipeline.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'mac-mess.cn', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.shopify.com', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'jmcrecycling.com', port: '', pathname: '/**' },
    ],
  },
};

export default nextConfig;
