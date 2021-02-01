import Vue from 'vue'
import App from './App.vue'

/**
 * child lar arasında veri transferi için bu değişken kullanılacak
 */
export const eventCar = new Vue();


new Vue({
  el: '#app',
  render: h => h(App)
})
