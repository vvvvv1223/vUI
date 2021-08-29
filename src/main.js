import Vue from 'vue'
import App from './App.vue'

import VvButton from './components/button.vue'

Vue.component(VvButton.name, VvButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
