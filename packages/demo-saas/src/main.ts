import Vue from 'vue';
import App from './App.vue';
import router from './router';
import fronteggOptions from './fronteggOptions';
Vue.config.productionTip = false;

import { Frontegg } from '@frontegg/vue';

Vue.use(Frontegg, {
  ...fronteggOptions,
  router,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
