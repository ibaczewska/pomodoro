import * as types from './mutation_types'

export default {
  start: ({ commit }) => {
    commit(types.START)
  },
  pause: ({ commit }) => {
    commit(types.PAUSE)
  },
  stop: ({ commit }) => {
    commit(types.STOP)
  },
  addPomodoro: ({ commit }) => {
    commit(types.ADD_POMODORO)
  },
  subtractPomodoro: ({ commit }) => {
    commit(types.SUBTRACT_POMODORO)
  },
  addBreak: ({ commit }) => {
    commit(types.ADD_BREAK)
  },
  subtractBreak: ({ commit }) => {
    commit(types.SUBTRACT_BREAK)
  }
}

