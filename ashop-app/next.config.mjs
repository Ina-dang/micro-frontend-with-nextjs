import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "ashop_app",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Products": "./components/Products.js",
          "./category": "./pages/category/index.js",
          "./books": "./pages/books/index.js",
        },
        extraOptions: {
          debug: false, // 'false' by default
          exposePages: false, // 'false' by default
        },
        shared: {},
      })
    );
    return config;
  },
};

export default nextConfig;
