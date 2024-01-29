/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cnbl-cdn.bamgrid.com',
            port: '',
          },

          {
            protocol: 'https',
            hostname: 'www.hulu.com',
            port: '',
          },
        ],
      },

     
}

module.exports = nextConfig
