import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    solidPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Solid PWA',
        short_name: 'SolidPWA',
        description: 'A Solid.js Progressive Web App',
        theme_color: '#000000',
        icons: [
          {
            src: '/icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-large.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      inject: {
        injectServiceWorker: true,
      },
    }),
  ],
});
