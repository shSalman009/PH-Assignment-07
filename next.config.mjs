/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [new URL("https://randomuser.me/api/portraits/**")],
  },
};

export default nextConfig;
