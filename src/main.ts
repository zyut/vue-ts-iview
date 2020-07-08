import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import 'normalize.css';
import '@/styles/index.scss';

Vue.use(ViewUI);
Vue.use(ViewUI, {
  size: 'medium', // set element-ui default size
})


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
