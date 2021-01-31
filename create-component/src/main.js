import Vue from 'vue'
import App from './App.vue'
import Hello from './Hello'

Vue.component("lambaComponent",Hello)

new Vue({
  el: '#app',
  render: h => h(App)
})
