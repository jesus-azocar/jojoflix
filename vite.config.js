import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- ¡Asegúrate de que esto cubra tu carpeta de componentes!
  ],
  plugins: [react()    ,
    tailwindcss()],
})
