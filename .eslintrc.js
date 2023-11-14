const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true, //不会继承父级配置文件中的规则
  env: {
    // 指定了代码将运行的环境
    browser: true,
    node: true,
    es6: true, // 支持 ES6 语法并不意味着同时支持新的 ES6 全局变量或类型（比如 Set 等新类型）。对于 ES6 语法，使用 { "parserOptions": { "ecmaVersion": 6 } }；对于新的 ES6 全局变量，使用 { "env":{ "es6": true } }. { "env": { "es6": true } } 自动启用es6语法，但 { "parserOptions": { "ecmaVersion": 6 } } 不自动启用es6全局变量。
  },
  parser: 'vue-eslint-parser', // 使用支持vue语法的eslint parser，它使得 ESLint 能够理解 Vue 特定的语法。
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended', // 基础规则
    /**
     * 继承 eslint-plugin-prettier 插件的规则
     * @link https://github.com/prettier/eslint-plugin-prettier
     */
    /**
     * 继承 eslint-plugin-vue 插件的规则
     * @link https://eslint.vuejs.org/user-guide/#installation
     */
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
});
