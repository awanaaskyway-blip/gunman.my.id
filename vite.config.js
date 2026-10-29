import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base relatif agar hasil build tetap jalan, baik di domain
// kustom gunman.my.id maupun di URL GitHub Pages bawaan.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
