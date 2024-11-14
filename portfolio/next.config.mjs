/** @type {import('next').NextConfig} */

const hostnames = ["picsum.photos", "i.pinimg.com"];

const nextConfig = {
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;
