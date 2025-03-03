import Vue from 'vue'
import App from './App.vue'
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import router from './Routes/Routes';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
