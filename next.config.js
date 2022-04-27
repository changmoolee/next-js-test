/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // url이 바뀐걸 유저가 인식할 수 있음.
    return [
      {
        source: "/contact/:path*", // 유저가 contact로 간다면
        destination: "/about:path*", // 여기로 보낸다
        permanent: false, // 이 리다이렉션이 permanent 영구적인지 아닌지
      },
    ];
  },
  async rewrites() {
    // 리다이렉트는 하지만, url이 바뀐걸 유저가 인식할 수 없음.
    return [
      {
        source: "/api/movies", // 유저가 여기로 간다면
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`, // 여기로 보낸다
      },
    ];
  },
};

module.exports = nextConfig;
