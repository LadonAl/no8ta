import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve("./src/assets"),
      "@components": path.resolve("./src/components"),
      "@helpers": path.resolve("./src/helpers"),
      "@layouts": path.resolve("./src/layouts"),
      "@pages": path.resolve("./src/pages"),
      "@queries": path.resolve("./src/queries"),
      "@theme": path.resolve("./src/theme"),
      "@fonts": path.resolve("./src/fonts"),
      "@styles": path.resolve("./src/styles"),
    },
  },
});
