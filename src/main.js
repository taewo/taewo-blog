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
  },
  mutations: {
    INCREMENT (state) {
      state.count += 1
    },
    DECREMENT (state) {
      state.count -= 1
    },
    RESET (state) {
      state.count = 0
    },
    ASYNC_FUNC (state) {
      state.count += 20
    },
  },
  actions: {
    actionA ({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('ASYNC_FUNC')
          resolve('Hello Promise')
        }, 1000)
      });
    },
    actionB ({commit, dispatch}) {
      return dispatch('actionA').then(() => {
        commit('DECREMENT')
      })
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
