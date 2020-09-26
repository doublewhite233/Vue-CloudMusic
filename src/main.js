import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from "vue-lazyload";

import toast from './components/common/toast'

import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false

Vue.prototype.$bus= new Vue()

Vue.use(VueAwesomeSwiper)
Vue.use(toast)
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
