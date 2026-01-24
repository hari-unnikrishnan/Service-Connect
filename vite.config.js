import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    dynamicImportVars({
      // options
    })
  ],
  base: command === 'build' ? '/Service-Connect/' : '/',
  server: {
    historyApiFallback: true,
  },
}))
