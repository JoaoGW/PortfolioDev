import { withGluestackUI } from '@gluestack/ui-next-adapter';
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: [],
};

export default withGluestackUI(nextConfig);
