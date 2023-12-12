<template>
  <div class="base-layout">
    <ul class="base-layout__menu">
      <li
        v-for="route of routes"
        :key="route.path"
        :class="{ active: isActive(route.path) }"
        @click="toPath(route.path)"
      >
        {{ route.meta.title }}
      </li>
    </ul>

    <div class="base-layout__main">
      <router-view></router-view>
    </div>
    <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
    <button class="shadow-xl">Button</button>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <div class="base-layout__footer">Vue2.7 + Vite + Less + Eslint + Stylelint + Commitlint 工程化脚手架。</div>
    <div class="mockup-code">
      <pre data-prefix="$"><code>npm i daisyui</code></pre>
      <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
      <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
    </div>
    <div class="divider">OR</div>
    <details class="dropdown">
      <summary class="m-1 btn">open or close</summary>
      <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </details>
  </div>
</template>

<script>
import { useRouter, useRoute } from '@/hooks/useRouter';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    const demoRoutes = router.options.routes[1].children;

    function isActive(path) {
      return route.value.path === `/demo/${path}`;
    }

    function toPath(path) {
      router.push(`/demo/${path}`);
    }

    return {
      /**
       * data
       */
      routes: demoRoutes,

      /**
       * methods
       */
      isActive,
      toPath,
    };
  },
};
</script>

<style lang="less" scoped>
.base-layout {
  height: 100%;
  background-color: #f5f5f5;

  &__menu {
    height: 48px;
    padding-top: 8px;
    background-color: #fff;
    border-bottom: 1px solid #eee;

    li {
      position: relative;
      top: 1px;
      display: inline-block;
      height: 41px;
      margin-left: 8px;
      padding: 0 8px;
      color: @success;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      border: 1px solid transparent;
      cursor: pointer;

      &.active,
      &:hover {
        background-color: #f5f5f5;
        border-color: #eee;
        border-bottom-color: #f5f5f5;
        border-radius: 8px 8px 0 0;
      }
    }
  }

  &__main {
    min-height: calc(50% - 300px);
    padding: 16px;
    overflow: auto;
  }

  &__footer {
    padding: 16px 0;
    color: #c3c3c3;
    font-size: 12px;
    text-align: center;
    border-top: 1px solid #eee;
  }
}
</style>
