import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' 
    ? '/index/' // Repositório: developmentsemicolon/index
    : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})

