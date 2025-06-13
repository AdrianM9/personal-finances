import react from "@vitejs/plugin-react";
import { execSync } from "child_process";
import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ghPages({
      history: false,
      onPublish: () => {
        console.log("Publishing to GitHub Pages finished successfully.");
        execSync("git fetch --all > /dev/null 2>&1");
      },
    }),
  ],
  base: "/personal-finances/",
});
