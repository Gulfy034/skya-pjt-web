import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {find: '@css',
        replacement: path.resolve(__dirname, 'src/styles')
      },
      {find: '@scss',
        replacement: path.resolve(__dirname, 'src/styles_scss')
      },
      {find: '@jsx',
        replacement: path.resolve(__dirname, 'src/jsx_script')
      },
      {find: '@font',
        replacement: path.resolve(__dirname, 'src/font')
      },
      {find: '@tsx_etc',
        replacement: path.resolve(__dirname, 'src/tsx_script')
      },
      {find: '@img',
        replacement: path.resolve(__dirname, 'src/imgs')
      }
    ],
  },
})
