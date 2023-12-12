import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue2 from '@vitejs/plugin-vue2';
import { resolve } from 'path';
function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir);
}

// 全局变量
const variablesLessPath = pathResolve('./src/styles/global/variables.less');
// 全局方法
const utilsLessPath = pathResolve('./src/styles/global/utils.less');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hask: `
            true;
            @import (reference) "${variablesLessPath}";
            @import (reference) "${utilsLessPath}";
          `,
        },
        javascriptEnabled: true,
      },
    },
  },
});
