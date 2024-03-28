import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import packageJson from './package.json'

/*
 * We need repo name to correct endpoint of github page
 */
const REPO = packageJson.name

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
        chunkFileNames: `${REPO}/[name].[hash].js`,
        entryFileNames: `${REPO}/[name].js`,
        assetFileNames: `[name].[ext]`,
        sourcemapExcludeSources: true,
      },
    }
  }
})
