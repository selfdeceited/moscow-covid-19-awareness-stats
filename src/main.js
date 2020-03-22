import VueGraph from 'vue-graph';
import Vue from 'vue';
import App from './App.vue';


Vue.use(VueGraph);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');