import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'node:child_process';

const commitHash = execSync('git rev-parse --short HEAD').toString().trim();

process.env.VITE_COMMIT_HASH = commitHash;

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
        chunkFileNames: `[name].${commitHash}.js`,
        entryFileNames: `[name].${commitHash}.js`,
        assetFileNames: `[name].${commitHash}.[ext]`,
        sourcemapExcludeSources: true,
      },
    }
  }
})
