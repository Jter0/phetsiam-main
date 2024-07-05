import nextTranslate from "next-translate-plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import { InjectManifest } from "workbox-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["next/babel"],
          plugins: [
            "@babel/plugin-transform-runtime",
            "babel-plugin-lodash",
            "babel-plugin-transform-remove-console", // Remove console.log in production
            ["@babel/plugin-proposal-class-properties", { loose: true }],
          ],
        },
      },
    });

    if (!isServer) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: process.env.ANALYZE === "true" ? "server" : "disabled",
        })
      );
    }

    config.plugins.push(
      new CleanWebpackPlugin() // Clean up build folder before each build
    );

    if (isServer) {
      const Critters = require("critters-webpack-plugin");
      config.plugins.push(
        new Critters({
          preload: "swap",
          preloadFonts: true,
          noscriptFallback: true, // Ensure a noscript fallback for critical CSS
          inlineThreshold: 1024, // Adjust the threshold for inlining styles
          mergeStylesheets: true, // Merge multiple CSS files into one
          pruneSource: true, // Remove unused CSS
          reduceInlineStyles: true, // Reduce the size of inlined styles
        })
      );
    }

    config.optimization = {
      splitChunks: {
        chunks: "all",
        minSize: 20000,
        maxSize: 70000,
      },
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Remove console logs
            },
          },
        }),
        new CssMinimizerPlugin(),
      ],
    };

    config.plugins.push(
      new InjectManifest({
        swSrc: "./src/service-worker.js",
        swDest: "service-worker.js",
      })
    );

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.algolia.com",
      },
    ],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  ...nextTranslate(),
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
