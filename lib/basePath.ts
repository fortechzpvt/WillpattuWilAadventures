// lib/basePath.ts

// This site only ever deploys to GitHub Pages at /willpattu-wild-adventures, so the
// prefix is hardcoded here rather than threaded through next.config's `env` option.
const basePath = process.env.NODE_ENV === "production" ? "/willpattu-wild-adventures" : "";

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
