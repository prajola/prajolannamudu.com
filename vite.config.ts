import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(root, "src") },
  },
  server: {
    // Bind on all interfaces so the dev server is reachable over IPv4 and
    // IPv6 alike; binding to "localhost" alone resolves to ::1 only on
    // macOS and makes 127.0.0.1 refuse connections.
    host: true,
    port: 5174,
  },
});
