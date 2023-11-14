module.exports = {
  root: true, // 不会继承父级配置文件中的规则
  extends: [
    'stylelint-config-standard', // Stylelint 官方推荐规则
    'stylelint-config-rational-order', // 对 CSS 声明进行排序
    // 'stylelint-config-prettier', // 关闭 Stylelint 中与 Prettier 中会发生冲突的规则。从 Stylelint v15 开始，所有与样式相关的规则已被弃用。如果您使用的是 v15 或更高版本并且不使用这些已弃用的规则，则不再需要此插件。
    'stylelint-config-html/vue', // （放到最后一位确保vue中的规则优先生效，越特定越靠后）包含了适用于 Vue.js 项目的一些规则。这些规则旨在检查样式部分，包括 LESS 文件中的样式。如果希望希望在 stylelint 中加入 LESS 特定的规则，你可以考虑搭配使用 stylelint-config-standard-less 或者配置 LESS 相关的规则
  ],
  defaultSeverity: 'warning', // 默认严重程度设置为 "warning"，即 StyleLint 会默认将违规问题报告为警告。你也可以将其设置为 "error"，将违规问题视为错误。
  plugins: ['stylelint-order'], //  给属性排序的插件.比如先Positioning，再Box model，再字体属性，再Background and borders等
  rules: {
    'no-empty-source': null, // 它会在 CSS/SCSS/Less 源文件中遇到空文件时发出警告。
    'selector-class-pattern': null, //检查类选择器是否遵循指定的模式。
  },
  overrides: [
    //设置额外的规则
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          //禁止使用未知的伪类选择器
          true,
          {
            ignorePseudoClasses: ['deep', 'global'], // 检查伪类选择器时，忽略 'deep' 和 'global' 这两个伪类。
          },
        ],
        'selector-pseudo-element-no-unknown': [
          // 禁止使用未知的伪元素选择器
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'], // 忽略 'v-deep'、'v-global' 和 'v-slotted' 这几个伪元素。
          },
        ],
      },
    },
  ],
};
