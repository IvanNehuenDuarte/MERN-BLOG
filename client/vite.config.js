import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    build: {
      outDir: "dist",
    },
    server: {
      open: true,
      proxy: {
        "/api": {
          target: env.VITE_BACK_URL || "http://localhost:5000",
          secure: false,
        },
      },
    },
  };
});
