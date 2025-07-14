// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mental-health-journal/', // <-- folder name in your GitHub repo
  plugins: [react()],
})
