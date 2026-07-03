/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
remotePatterns: [{ hostname: "www.london.ac.uk" }],}
};

export default nextConfig;
