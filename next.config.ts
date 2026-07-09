import type { NextConfig } from "next";

// This site only ever deploys to GitHub Pages at /willpattu-wild-adventures, so the
// prefix is hardcoded here (gated on NODE_ENV, Next's own always-reliable built-in
// flag) rather than derived from GITHUB_REPOSITORY passed through next.config's `env`
// option — that indirection turned out to be unreliable to inline in this pipeline.
// `next dev` sets NODE_ENV to "development", so basePath stays empty locally.
const basePath = process.env.NODE_ENV === "production" ? "/willpattu-wild-adventures" : "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
