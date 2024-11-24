/** @type {import('next').NextConfig} */

const hostnames = ["picsum.photos", "i.pinimg.com", "assets.aceternity.com", "pbs.twimg.com"];

const nextConfig = {
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
    domains: [
      "hackerrank.com",
    ],
  },
};

export default nextConfig;
