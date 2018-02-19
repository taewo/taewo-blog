// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0,
    text: '',
  },
  mutations: {
    increment (state) {
      state.count += 1
    },
    decrement (state) {
      state.count -= 1
    },
    reset (state) {
      state.count = 0
    },
    asycFunc (state) {
      setTimeout(() => {
        state.count += 2
      }, 1000)
    },
    taewoong (state) {
      state.text += 'taewoong '
    }
  },
  actions: {
    callMyName ({commit}) {
      console.log('commit', commit);
      commit('taewoong')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
