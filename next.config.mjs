/** @type {import('next').NextConfig} */
import { codecovWebpackPlugin } from '@codecov/webpack-plugin';

export default {
  /* ... */
  webpack: (config) => {
    if (process.env.ANALYZE === 'true') {
      if (process.env.CODECOV_TOKEN) {
        config.plugins.push(
          codecovWebpackPlugin({
            enableBundleAnalysis: true,
            bundleName: '<bundle project name>',
            uploadToken: process.env.CODECOV_TOKEN,
          }),
        );
      }
    }

    return config;
  },
};
