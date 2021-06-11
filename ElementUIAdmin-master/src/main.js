import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import Utils from './common/utils'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import './mock.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
axios.interceptors.request.use((config) => {
  config.withCredentials = true
  return config
}, (error) => {
  return Promise.reject(error)
})
axios.defaults.baseURL="http://115.231.255.86:5000"
axios.defaults.withCredentials = true
Vue.prototype.$http = axios
Vue.prototype.Utils = Utils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
