/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",           // static export for GitHub Pages
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
