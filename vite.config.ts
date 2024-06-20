import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path, { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, '404.html')
      }
    }
  },
  resolve: {
    alias: [
      {find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {find: '@css',
        replacement: path.resolve(__dirname, 'src/styles')
      },
      {find: '@jsx',
        replacement: path.resolve(__dirname, 'src/jsx_script')
      },
      {
        find: '@components',
        replacement:path.resolve(__dirname, 'components')
      },
      {
        find: '@hooks',
        replacement:path.resolve(__dirname, 'hooks')
      }
    ],
  },
})
