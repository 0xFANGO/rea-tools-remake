import { defineConfig } from "astro/config";

// The remake is published as plain static files, matching the reference
// site's delivery model: pre-rendered HTML plus a little per-page JavaScript.
export default defineConfig({
  site: "https://0xfango.github.io",
  base: "/rea-tools-remake",
  trailingSlash: "always",
  build: { format: "directory" },
  devToolbar: { enabled: false },
});
