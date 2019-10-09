import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import store from './store/';
import VueRouter from "vue-router";
import router from "./routes";

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
