import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://abdala9512.github.io/gh-actions-course', 
  plugins: [react()]
})
