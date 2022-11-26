/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const eslintConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

const withTM = require('next-transpile-modules')(["react-icons"]);

module.exports =  withTM({nextConfig,eslintConfig});
