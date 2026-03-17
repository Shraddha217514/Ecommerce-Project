import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://ecommerce-project-1-b7y0.onrender.com'
      },
      '/images': {
        target: 'https://ecommerce-project-1-b7y0.onrender.com'
      }
    }
  }
})