/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // Ensures no server modules are included on the client.
      config.plugins.push(
        new webpack.IgnorePlugin({ resourceRegExp: /lib\/server/ })
      );
    }

    config.experiments = { ...config.experiments, topLevelAwait: true };

    return config;
  },
  compiler: {
    relay: require('./relay.config'),
  },
  transpilePackages: ['@elton-okawa/*'],
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer(nextConfig);
