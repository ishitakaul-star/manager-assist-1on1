import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/manager-assist-1on1/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
