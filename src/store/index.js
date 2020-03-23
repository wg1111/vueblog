import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vue.Store({
  state:{
    routes:[]
  },
  mutations:{
    initRoutes(state,data){
      state.routes = data;
    }
  },
  actions:{}
})
