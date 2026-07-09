// This site only ever deploys to GitHub Pages at /willpattu-wild-adventures, so the
// prefix is hardcoded here rather than threaded through next.config's `env` option —
// that indirection turned out to be unreliable to inline in this build pipeline.
// NODE_ENV is Next.js's own built-in flag, always "production" for `next build`.
const basePath = process.env.NODE_ENV === "production" ? "/willpattu-wild-adventures" : "";

// next/image and next/link auto-prefix basePath, but raw <video>/<source> tags don't,
// so any hardcoded "/assets/..." path used outside those components needs this helper.
export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
