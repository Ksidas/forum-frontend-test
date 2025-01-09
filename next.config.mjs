const config = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*", // Backend API URL
      },
    ];
  },
};

export default config;
