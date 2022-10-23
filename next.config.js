/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "localhost",
      "https://project-sns-app-backend.herokuapp.com/",
      "*",
    ],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
