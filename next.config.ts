import type { NextConfig } from "next";

// Once the custom domain (wilpattuwildadventures.com, see public/CNAME) is pointed
// at GitHub Pages and verified, the site is served from the domain root and must
// build with NO basePath — a subpath prefix would 404 every asset and internal link.
// Until that DNS/Pages cutover is finished, the site keeps deploying to the bare
// project-page URL (<user>.github.io/willpattu-wild-adventures), which still needs
// the prefix. Flip the cutover by setting NEXT_PUBLIC_CUSTOM_DOMAIN_LIVE=true in the
// production build environment — no further code change needed.
// `next dev` sets NODE_ENV to "development", so basePath stays empty locally either way.
const usesCustomDomain = process.env.NEXT_PUBLIC_CUSTOM_DOMAIN_LIVE === "true";
const basePath =
  process.env.NODE_ENV === "production" && !usesCustomDomain
    ? "/willpattu-wild-adventures"
    : "";

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
