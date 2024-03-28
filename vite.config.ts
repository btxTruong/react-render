import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: 'src/main.tsx',
        devtools: 'src/devtools.tsx',
        index: 'index.html',
      },
      output: {
        chunkFileNames: `[name].[hash].js`,
        entryFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
        sourcemapExcludeSources: true,
      },
    }
  }
})
