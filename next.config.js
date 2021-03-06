/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: [
      'user-images.githubusercontent.com',
      'd1fdloi71mui9q.cloudfront.net',
      'modo-phinf.pstatic.net',
      'search.pstatic.net',
      'ldb-phinf.pstatic.net',
      'postfiles.pstatic.net',
      'k.kakaocdn.net',
      'mblogthumb-phinf.pstatic.net',
      'www.beurreny.com',
      'i.esdrop.com',
      'i.pinimg.com',
      'drive.google.com',
    ], // 이곳에 에러에서 hostname 다음 따옴표에 오는 링크를 적으면 된다.
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://15.165.196.34:8000/:path*', // Proxy to Backend
      },
    ]
  },
}
