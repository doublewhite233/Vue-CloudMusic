import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex)

const state = {
  userInfo: null,
  playList: [],
  nowPlayingMusic:{
    name: '',
    id: 1449782341,
    displayTime: 0,
    percent: 0
  },
  nowMVid: 0
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
