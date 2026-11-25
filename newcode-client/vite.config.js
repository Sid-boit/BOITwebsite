import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5180,
    allowedHosts: [
      'ericaceous-christiana-proscribable.ngrok-free.dev',
      'pleading-both-estate.ngrok-free.dev',
    ],
    // Local only. Production uses VITE_API_URL → separate Vercel API project.
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
});
