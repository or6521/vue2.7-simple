# Vue 2.7 + Vite
使用npm create vue@legacy创建一个vue2.7项目，所有的配置都不添加，自己从零开始试着配置vite，从而领略vite的艺术（其实是忍受不了webpack）。注释拉满避免忘记了

## 教程目录

1. 工程化实践
    - [Eslint 格式化 JS 代码](./docs/1.Eslint+Prettier.md)
    - [Stylelint 格式化 CSS 代码](./docs/2.stylelint.md)
    - [Husky 提交时自动格式化代码](./docs/3.husky.md)
    - [Commitlint 校验 Commit Message](./docs/4.commitlint.md)
2. 全家桶
    - [路由 vue-router](./docs/2.%E5%85%A8%E5%AE%B6%E6%A1%B6/1.%20%E8%B7%AF%E7%94%B1.md)
    - [全局状态管理 pinia](./docs/2.%E5%85%A8%E5%AE%B6%E6%A1%B6/2.%20%E5%85%A8%E5%B1%80%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86.md)
    - [组件库](./docs/2.%E5%85%A8%E5%AE%B6%E6%A1%B6/3.%20%E7%BB%84%E4%BB%B6%E5%BA%93.md)
3. 更多功能
    - [Axios 封装及接口管理](./docs/3.%E6%9B%B4%E5%A4%9A%E5%8A%9F%E8%83%BD/1.%20Axios%20%E5%B0%81%E8%A3%85%E5%8F%8A%E6%8E%A5%E5%8F%A3%E7%AE%A1%E7%90%86.md)
    - [Css 样式处理](./docs/3.%E6%9B%B4%E5%A4%9A%E5%8A%9F%E8%83%BD/2.%20Css%20%E6%A0%B7%E5%BC%8F%E5%A4%84%E7%90%86.md)
    - [Vite 基础配置](./docs/3.%E6%9B%B4%E5%A4%9A%E5%8A%9F%E8%83%BD/3.%20Vite%20%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE.md)

## 基础搭建

在这里我们使用的是 [pnpm](https://pnpm.io/zh/) 来作为本项目的包管理工具。

```bash
# 安装依赖
pnpm i

# 运行
pnpm run dev

# 打包
pnpm run build

# 打包文件预览
pnpm run preview
```

> 本人开发环境
>
> node v16.13.1（大于 14 版本即可）
>
> pnpm v6.30.0


### 插件安装

此脚手架必须安以下依赖才能保证，代码自动格式化的有效运行：

- Vetur
- EditorConfig for VS Code
- ESLint
- Stylelint

## 功能列表

- [x] Vue2.7 + Vite
- [x] Eslint、Stylelint、Commitlint 统一开发规范
- [x] husky + lint-staged （git commit 时自动格式化代码）
- [x] Vue 全家桶集成
- [x] Axios 封装及接口管理
- [x] Css 样式处理
- [x] vite.config.js 基础配置
- [x] 跨域配置
- [x] 多环境变量配置
- [x] 浏览器构建兼容性
