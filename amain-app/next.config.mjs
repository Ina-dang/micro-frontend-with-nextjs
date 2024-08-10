import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "amain_app",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {},
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
