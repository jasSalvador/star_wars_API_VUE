import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


axios.defaults.baseURL="https://swapi.dev/api"
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Prueba de Axios en main.js
//axios.get("/people/")
//  .then(response => console.log("Prueba de Axios en main.js:", response.data))
//  .catch(error => console.error("Error en la prueba de Axios en main.js:", error));

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
