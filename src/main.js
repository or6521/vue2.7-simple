import Vue from 'vue';
import App from './App.vue';

import './assets/main.css';
import { router } from './router';
import { setupGuard } from './router/guard';
import './styles/index.less';

import { store } from './store';

setupGuard(router);

new Vue({
  router,
  pinia: store,
  render: (h) => h(App),
}).$mount('#app');
