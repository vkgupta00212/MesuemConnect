import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mesuemConnect/',
  optimizeDeps: {
    include: ['@mui/icons-material'], // Pre-bundle icons material
  },
  build: {
    rollupOptions: {
      external: ['@mui/icons-material'], // Treat icons material as external
    },
  },
});
