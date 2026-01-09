import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// https://vitejs.dev/config/
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => ({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        v1: resolve(__dirname, 'v1.html'),
        v2: resolve(__dirname, 'v2.html'),
      },
    },
  },
}));
