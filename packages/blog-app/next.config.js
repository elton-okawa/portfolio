/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  transpilePackages: ['@elton-okawa/*'],
};

module.exports = nextConfig
