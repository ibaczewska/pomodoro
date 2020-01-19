import * as types from './mutation_types'
import _ from 'underscore'
import { WORKING_TIME, RESTING_TIME, KITTEN_TIME } from '../config'

function togglePomodoro (state, toggle) {
  if (_.isBoolean(toggle) === false) {
    toggle = !state.isWorking
  }
  state.isWorking = toggle
  state.counter = state.isWorking ? WORKING_TIME : RESTING_TIME
}

function tick (state) {
  if (state.counter === 0) {
    togglePomodoro(state)
  }
  state.counter--
  if (state.counter % KITTEN_TIME === 0) {
    state.timestamp = new Date().getTime()
  }
}

function updatePomodoro (state, value) {
  state.pomodoro = parseInt(state.pomodoro)
  if (value >= 0 || state.pomodoro > 1) {
    state.pomodoro += value
  }
}

function updateBreak (state, value) {
  state.shortBreak = parseInt(state.shortBreak)
  if (value >= 0 || state.shortBreak > 1) {
    state.shortBreak += value
  }
}
export default {
  [types.START] (state) {
    state.started = true
    state.paused = false
    state.stopped = false
    state.interval = setInterval(() => tick(state), 1000)
  },
  [types.PAUSE] (state) {
    state.paused = true
    state.started = true
    state.stopped = false
    clearInterval(state.interval)
  },
  [types.STOP] (state) {
    state.stopped = true
    state.paused = false
    state.started = false
    clearInterval(state.interval)
    togglePomodoro(state, true)
  },
  [types.ADD_POMODORO] (state) {
    updatePomodoro(state, 1)
  },
  [types.SUBTRACT_POMODORO] (state) {
    updatePomodoro(state, -1)
  },
  [types.ADD_BREAK] (state) {
    updateBreak(state, 1)
  },
  [types.SUBTRACT_BREAK] (state) {
    updateBreak(state, -1)
  }

}
