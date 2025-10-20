import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Enable Lovable Tagger plugin only in development mode
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  server: {
    host: "::",      // allows access from all network interfaces
    port: 8080,      // dev server port
    open: true,      // automatically open the browser
  },

  build: {
    outDir: "dist",  // build output directory
    sourcemap: mode === "development", // generate source maps only in dev
  },
}));
