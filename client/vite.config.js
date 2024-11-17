import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    open: true,
    proxy: {
      "/api": {
        target: import.meta.env.VITE_BACK_URL,
        secure: false,
      },
    },
  },
});
