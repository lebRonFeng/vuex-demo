import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex); // 应用vuex插件

function delay(duration){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    },duration);
  })
}
const store = new Vuex.Store({
  // 仓库配置对象
  state: {
    count: 0
  },
  mutations: {
    increase(state){
      state.count++;
    },
    decrease(state){
      state.count--;
    },
    power(state, payload){
      state.count **= payload;
    }
  },
  actions: {
    async asyncIncrease(ctx){
      await delay(1000)
      ctx.commit("increase");
    },
    async asyncDecrease(ctx){
      await delay(1000)
      ctx.commit("decrease");
    },
    asyncPower(ctx, payload){
      setTimeout(() => {
        ctx.commit("power", payload);
      },1000)
    }
  }
}) 

window.store = store;
export default store; 



