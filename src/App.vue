<template>
  <div id="app" class="container">

    <h2>
      <span>{{ 'Pomodoro' | uppercase | addspace }}</span>
      <controls-component></controls-component>
      <button @click="modalOpen">Settings</button>
    </h2>

    <state-title-component v-bind:isworking="isworking"></state-title-component>

    <countdown-component></countdown-component>

    <transition name="fade">
      <kittens-component v-show="!isworking"></kittens-component>
    </transition>

    <transition name="fade">
      <modal v-if="showModal" @close="modalClose">
        <div slot="header">Set custom times</div>

<div slot="body">
        <form @submit.prevent="saveSettings">

            <label>Pomodoro</label>
            <br>
            <input :value="pomodoro"/>
            <button @click.prevent="subtractPomodoro">-</button>
            <button @click.prevent="addPomodoro">+</button>
            <br>
            <label>Short break</label>
            <br>
            <input :value="shortBreak"/>
            <button @click.prevent="subtractBreak">-</button>
            <button @click.prevent="addBreak">+</button>
            <br>
            <br>

            <button type="submit">Save</button>
        </form>
</div>

      </modal>
    </transition>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ControlsComponent from './components/ControlsComponent'
import CountdownComponent from './components/CountdownComponent'
import StateTitleComponent from './components/StateTitleComponent'
import KittensComponent from './components/KittensComponent'
import Modal from './components/Modal'
import store from './vuex/store'

export default {

  data () {
    return {
      showModal: false
    }
  },

  components: {
    ControlsComponent,
    CountdownComponent,
    KittensComponent,
    StateTitleComponent,
    Modal
  },

  computed: {
    ...mapGetters({
        isworking: 'isWorking',
        pomodoro: 'getPomodoro',
        shortBreak: 'getShortBreak'
    })
  },

  methods: {
    ...mapActions([
      'addPomodoro',
      'subtractPomodoro',
      'addBreak',
      'subtractBreak'
    ]),

    modalOpen () {
      this.showModal = true
    },
    modalClose () {
      this.showModal = false
    },
    saveSettings () {
      this.modalClose()
    }
  },

  store
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  input {
    max-width: 50%;
  }
</style>
