// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // يفتح السيرفر لكل الأجهزة في الشبكة
    port: 5173,        // تأكد تستخدم نفس البورت
    proxy: {
      '/api': {
        target: 'https://api.devscape.online',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
