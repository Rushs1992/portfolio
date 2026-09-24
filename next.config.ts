import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // The Open Graph image reads these font files at request time; make sure the
  // standalone build ships them.
  outputFileTracingIncludes: {
    "/opengraph-image": ["./src/assets/fonts/**/*"],
  },
};

export default nextConfig;
