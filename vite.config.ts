
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: './', // This ensures assets are loaded correctly on cPanel
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: 'dist', // Output directory for production build
    assetsDir: 'assets', // Directory for chunks and assets
    emptyOutDir: true, // Clean the output directory before build
    rollupOptions: {
      output: {
        manualChunks: undefined // Prevents code splitting which can cause issues on some hosts
      }
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
