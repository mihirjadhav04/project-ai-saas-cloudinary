/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true, // Use `true` for a 301 redirect, `false` for a 307 redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  