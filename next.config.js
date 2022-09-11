/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["jsx", "js", "tsx", "ts", "frag"],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.frag/,
      type: "asset/source",
    });
    config.module.rules.push({
      test: /\.vert/,
      type: "asset/source",
    });
    return config;
  },
  images: {
    domains: ["assets.website-files.com", "uploads-ssl.webflow.com", "twitter.com"],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
    urlImports: [
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/",
    ],
  },
};

module.exports = nextConfig;
