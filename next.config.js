/** @type {import('next').NextConfig} */
//const withNextIntl = require("next-intl/plugin")("./src/i18n.ts");

const nextConfig = {
  pageExtensions: ["ts", "tsx"],
  logging: {
    fetches: {
      fullUrl: true,
    },
  },  
  //output: 'standalone',
  experimental: {
    staleTimes: {
      dynamic: 5,
      static: 5,
    },
  },
};

module.exports = nextConfig;
