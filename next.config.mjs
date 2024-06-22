import nextTranslate from "next-translate-plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["next/babel"],
          plugins: [
            // Add any necessary plugins here
          ],
        },
      },
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.algolia.com",
      },
    ],
  },
  ...nextTranslate(),
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
