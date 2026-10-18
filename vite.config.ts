import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repository = "RenaissanceArtists";

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === "true" ? `/${repository}/` : "/",
});
