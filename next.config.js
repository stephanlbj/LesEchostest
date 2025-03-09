/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler:{
        styledComponents:true
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "placehold.co",
          },
        ],
        dangerouslyAllowSVG: true, 
      },

      async headers() {
        return [
          {
            source: "/_next/static/(.*)",  
            headers: [
              {
                key: "Cache-Control", 
                value: "public, max-age=31536000, immutable",
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
