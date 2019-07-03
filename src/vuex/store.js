import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { WORKING_TIME, RESTING_TIME } from '../config'

Vue.use(Vuex)

const state = {
  started: false,
  paused: false,
  stopped: false,
  isWorking: true,
  counter: WORKING_TIME,
  interval: null,
  timestamp: 0,
  pomodoro: WORKING_TIME,
  shortBreak: RESTING_TIME
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
