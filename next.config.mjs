const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.edgestore.dev',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
