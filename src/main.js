import Vue from 'vue'
import App from './App.vue'
import "./style.css"
import store from "./store/index"
import router from "./router"
Vue.config.productionTip = false

store.dispatch("loginUser/whoAmI")
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
