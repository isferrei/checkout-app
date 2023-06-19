/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                module: require.resolve("module"),
            }
        }
        return config
    },
    babel: {
        ignore: [/node_modules\/stack-utils/],
    },
}

module.exports = nextConfig
