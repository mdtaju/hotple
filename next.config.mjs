/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sns-webpic-qc.xhscdn.com",
      },
    ],
  },
};

export default nextConfig;
