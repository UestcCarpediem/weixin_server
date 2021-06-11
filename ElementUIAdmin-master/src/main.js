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


axios.interceptors.response.use(function (response) {
	// token 已过期，重定向到登录页面
	if (response.data.data.statusCode == -1){
		router.replace({
                        path: '/login',
                        query: {hastoken:1}
                    })
	}
	return response
}, function (error) {
	// Do something with response error
	return Promise.reject(error)
})


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
