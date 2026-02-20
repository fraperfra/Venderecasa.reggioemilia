/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/valutazione-gratuita-eredita',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
