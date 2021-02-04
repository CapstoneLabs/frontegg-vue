import Vue from 'vue';
import App from './App.vue';
import router from './router';
import fronteggCore from './plugins/fronteggCore';
import fronteggAuth from './plugins/fronteggAuth';
import fronteggAudits from './plugins/fronteggAudits';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(fronteggCore, { baseUrl: 'http://localhost:8080' });
Vue.use(fronteggAuth, {
  routes: {
    authenticatedUrl: 'https://live.frontegg.com/',
    loginUrl: '/account/login',
    logoutUrl: '/account/logout',
    activateUrl: '/account/activate',
    acceptInvitationUrl: '/account/invitation/accept',
    forgetPasswordUrl: '/account/forget-password',
    resetPasswordUrl: '/account/reset-password',
    socialLoginCallbackUrl: '/account/social/success',
    signUpUrl: '/account/sign-up',
  },
});
Vue.use(fronteggAudits);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
