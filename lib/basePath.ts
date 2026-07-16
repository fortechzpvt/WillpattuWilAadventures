// lib/basePath.ts

// Mirrors the basePath logic in next.config.ts — must stay in sync. Once the
// custom domain cutover is live (NEXT_PUBLIC_CUSTOM_DOMAIN_LIVE=true at build time,
// see next.config.ts comment), the site serves from the domain root and needs no prefix.
const usesCustomDomain = process.env.NEXT_PUBLIC_CUSTOM_DOMAIN_LIVE === "true";
const basePath =
  process.env.NODE_ENV === "production" && !usesCustomDomain
    ? "/willpattu-wild-adventures"
    : "";

// next/image and next/link auto-prefix basePath, but raw <video>/<source> tags don't,
// so any hardcoded "/assets/..." path used outside those components needs this helper.
export function withBasePath(path: string): string {
  // If the path is already a full external URL (like a GitHub raw link), 
  // return it as-is to prevent corruption of the URL.
  if (path.startsWith("http")) {
    return path;
  }
  
  // For local assets (like "/assets/..."), continue to prepend the basePath.
  return `${basePath}${path}`;
}
