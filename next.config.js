/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ["images.ctfassets.net"],
    loader: "imgix",
    path: "",
  },
};

module.exports = nextConfig;
