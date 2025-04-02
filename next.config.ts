import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "*"],
  },
  output: "standalone",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: {
    appIsrStatus: false,
  },
  assetPrefix:
      process.env.NODE_ENV === "production"
          ? "https://calico-cat-butler.github.io/trip"
          : "",
  webpack: (config, options) => {
    config.cache = false;

    config.module.rules.push({
      test: /\.temp\.tsx?$/,
      use: "ignore-loader",
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/financial",
        destination: "/financial/home",
        permanent: false,
      },
      {
        source: "/admin",
        destination: "/admin/assign",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
