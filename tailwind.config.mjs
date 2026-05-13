/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Design tokens will be wired here by Showcase during the Brand Alchemy handoff.
      // Placeholder — replace with the real token set from the design system bundle.
      colors: {},
      fontFamily: {},
    },
  },
  plugins: [],
};
