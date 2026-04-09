import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub project pages, set to '/REPO_NAME/' before build.
  base: process.env.GITHUB_PAGES_BASE || '/',
})