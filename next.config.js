/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/.well-known/autoconfig/mail/config-v1.1.xml",
        destination: "/mail/config-v1.1.xml",
      },
      {
        source: "/AutoDiscover/AutoDiscover.xml",
        destination: "/autodiscover/autodiscover.xml",
      },
    ];
  },
  experimental: { serverActions: true },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    if (!isServer) return config;
    //console.log(config);
    return config;
  },
};

module.exports = nextConfig;
