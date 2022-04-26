/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact/:path*", // 유저가 contact로 간다면
        destination: "/about/:path*", // 여기로 보낸다
        permanent: false, // 이 리다이렉션이 permanent 영구적인지 아닌지
      },
    ];
  },
};

module.exports = nextConfig;
