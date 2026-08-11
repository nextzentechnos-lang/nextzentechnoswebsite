import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssMinify: 'esbuild',
    target: ['chrome80', 'safari13.1', 'firefox78', 'edge80', 'ios13']
  }
})
