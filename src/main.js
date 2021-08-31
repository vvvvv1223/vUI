import Vue from 'vue'
import App from './App.vue'

import VvButton from './components/button.vue'
import VvDialog from './components/dialog.vue'

Vue.component(VvButton.name, VvButton);
Vue.component(VvDialog.name, VvDialog);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
