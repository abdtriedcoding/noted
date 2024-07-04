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
  experimental: {
    reactCompiler: true,
  },
}

export default nextConfig
