module.exports = {
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:categoryslug',
  //       destination: '/category/:categoryslug',
  //     }
  //   ];
  // },
  // output: 'standalone',
  publicRuntimeConfig: {
    site: {
      name: "Next.js + Tailwind CSS template",
      url:
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://bellaznews.netlify.app/",
    },
  },
  compiler: {
    removeConsole: true,
  },
  swcMinify: true,
};
