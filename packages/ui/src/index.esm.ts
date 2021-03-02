import _Vue, { PluginFunction } from 'vue';

import './styles/app.scss';
// Import vue components
import * as authComponents from './auth/index';
import Vuetify from 'vuetify';

_Vue.use(Vuetify);

// install function executed by Vue.use()
const install: PluginFunction<any> = function installVueUi(Vue: typeof _Vue) {
  Object.entries(authComponents).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });

  const routes = Vue.fronteggAuth.routes;
  Vue.fronteggAuth.router.addRoute({
    path: routes.loginUrl,
    name: 'Login',
    component: authComponents.LoginPage,
  });
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from './auth';

