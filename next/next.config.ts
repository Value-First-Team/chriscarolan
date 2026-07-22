import type { NextConfig } from 'next';
import path from 'path';

// The next/ subdirectory is nested inside the Astro site's repo. Next.js 15
// workspace-root detection walks up to /mnt/d/package-lock.json and resolves
// packages from the parent's node_modules. Force @vf/site-kit (the React shell,
// v0.2) to resolve from THIS project's node_modules so it never picks up an
// Astro-era v0.1 copy from a parent directory.
const nextNodeModules = path.resolve(process.cwd(), 'node_modules');

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string>),
      // EXACT-match alias ('$'). Without the '$' this key also captures every
      // SUBPATH — webpack would rewrite '@vf/site-kit/flyin' to
      // <node_modules>/@vf/site-kit/flyin, bypassing the package's own exports
      // map (which points at dist/flyin.js) and failing to resolve. The pin this
      // alias exists to force is on the package itself, not its subpaths.
      '@vf/site-kit$': path.resolve(nextNodeModules, '@vf/site-kit'),
    };
    return config;
  },

  // Silence the "workspace root" lockfile warning — Next.js 15 walks up to
  // /mnt/d/package-lock.json from the next/ subdirectory; this tells the tracer
  // where to stop.
  outputFileTracingRoot: process.cwd(),

  // Output: static export for SSG (output:'export'). The site is fully static —
  // generateStaticParams covers any dynamic routes. Switch to 'standalone' only
  // if ISR/edge routes are ever introduced.
  output: 'export',

  trailingSlash: false,

  images: {
    // Static export cannot use the Next Image optimizer; serve assets as-is.
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
