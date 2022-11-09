/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },

  images: {
    domains: [
      "platform-lookaside.fbsbx.com",
      "lh3.googleusercontent.com",
      "visionid.vn",
    ],
  },
};

module.exports = nextConfig;
