/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };

    return config;
  },
  experimental: {
    mdxRs: true,
  },
  modularizeImports: {
    // Destructure barrel imports - View 010-nextjs-file-structure
    components: {
      transform: 'components/{{member}}',
      skipDefaultConversion: true, // keep named imports
      preventFullImport: true, // error if you do "import * as something"
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')();

module.exports = withBundleAnalyzer(withMDX(nextConfig));
