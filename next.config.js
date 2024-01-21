/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cnbl-cdn.bamgrid.com',
            port: '',
          },
        ],
      },

     
}

module.exports = nextConfig
