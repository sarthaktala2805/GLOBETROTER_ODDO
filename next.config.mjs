/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    // Build ke waqt type check errors ignore karega
    ignoreBuildErrors: true,
  },
  eslint: {
    // Build ke waqt linting errors ignore karega
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
