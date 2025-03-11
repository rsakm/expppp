// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// };

// module.exports = nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless',  // Ensures your app is optimized for serverless environments (like Netlify)
  
  images: {
    domains: ['your-image-domain.com'], // Replace with actual image domains you're using (if any)
  },

  trailingSlash: true,  // Optional: Ensures that all URLs end with a trailing slash (Netlify best practice)

  webpack: (config) => {
    // If you have any specific webpack customizations, you can add them here
    return config;
  },

  reactStrictMode: true,  // Optional: Enables React Strict Mode for better development experience

  // Add any other custom configuration you may need here
};

module.exports = nextConfig;
