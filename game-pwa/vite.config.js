import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Lit PWA App',
        short_name: 'LitPWA',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0078d4',
        icons: [
          {
            src: 'icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000, // Puedes cambiar el puerto si lo deseas
  },
});
