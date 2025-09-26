import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuración para manejar archivos estáticos
  assetsInclude: ['**/*.JPG', '**/*.PNG', '**/*.jpeg', '**/*.jpg', '**/*.pdf'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '/images': fileURLToPath(new URL('./public/images', import.meta.url))
    }
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
      },
      output: {
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.pdf')) {
            return 'assets/files/[name][extname]';
          }
          return 'assets/[ext]/[name]-[hash][extname]';
        }
      }
    }
  },
  server: {
    port: 5173,
    open: true,
    fs: {
      strict: false,
    },
  },
  publicDir: 'public',
});
