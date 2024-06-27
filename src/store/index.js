import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex); // 应用vuex插件
import counter from './counter'
import loginUser from './loginUser'

const store = new Vuex.Store({
  modules: {
    counter,
    loginUser
  },
  strict: true
})

window.store = store;
export default store;



