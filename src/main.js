import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from "./components/MyHeader"
import MyFooter from "./components/MyFooter"
import axios from "axios"

axios.defaults.baseURL="http://127.0.0.1";
Vue.prototype.axios=axios;

Vue.config.productionTip = false

Vue.component("my-header",MyHeader);
// Vue.component("my-footer",MyFooter);
new Vue({
  router,
  store,
  render: h => h(App)
  //读取App中的html内容
}).$mount('#app')
//  挂载到html中id为app的位置
