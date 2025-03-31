import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: '@styles',
        replacement: resolve(__dirname, 'src/styles'),
      },
      {
        find: '@components',
        replacement: resolve(__dirname, 'components'),
      },
      {
        find: '@hooks',
        replacement: resolve(__dirname, 'hooks'),
      }
    ],
  },
  assetsInclude: ['**/*.gltf','**/*.blender'],
})
