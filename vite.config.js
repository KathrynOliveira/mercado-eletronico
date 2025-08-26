import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@icons': fileURLToPath(new URL('./public/images/icons', import.meta.url))
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
   build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.mercadoe.space',
        changeOrigin: true
        ,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
     }
   }
})
