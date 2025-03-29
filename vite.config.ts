import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';// attention
// i have changed into deno to replace npm, use node:path to use a npm build-in module!!!
// you need `npm install --save-dev @types/node` to import `path`,
// or `install --save-dev path` follishly.
// why i use deno, this is a mystery.

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
