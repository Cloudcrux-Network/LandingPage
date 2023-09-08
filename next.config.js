/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

module.exports = nextConfig;
