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

      plugins: [
        require('tailwind-scrollbar-hide')
        // ...
      ]
}

module.exports = nextConfig
