import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

const site =
  process.env.SITE_URL || process.env.PUBLIC_SITE_URL || "https://betelsighet.vercel.app";

export default defineConfig({
  site,
  integrations: [mdx()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
