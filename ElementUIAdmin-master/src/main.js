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
import VueCookies from 'vue-cookies'
import Meta from "vue-meta";
Vue.use(Meta);
Vue.use(VueCookies)
axios.interceptors.request.use(
  (config) => {
    if (true) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.token = Vue.$cookies.get("token")
      config.headers.Authorization = Vue.$cookies.get("Authorization") // 根据实际情况自行修改
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(function (response) {
	// token 已过期，重定向到登录页面
  console.log(response)
  try{
    if (response.data.statusCode == -1){
      router.replace({
                          path: '/login',
                          query: {hastoken:1}
                      })
    }
    return response
  } catch(err){
    console.log(err)
    return response
  }
	
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
// axios.defaults.baseURL="http://uestcydri.com:5001"
axios.defaults.baseURL="http://localhost:5001"
axios.defaults.withCredentials = true
Vue.prototype.$http = axios
Vue.prototype.Utils = Utils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
