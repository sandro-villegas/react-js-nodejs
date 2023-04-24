import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000, // Reemplaza 5000 con el puerto que desees utilizar
  },
  plugins: [react()],
});
