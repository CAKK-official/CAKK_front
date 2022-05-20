/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['search.pstatic.net'], // 이곳에 에러에서 hostname 다음 따옴표에 오는 링크를 적으면 된다.
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://15.165.196.34:8000/:path*', // Proxy to Backend
      },
    ]
  },
}
