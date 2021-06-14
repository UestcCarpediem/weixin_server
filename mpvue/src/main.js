import Vue from 'vue'
import App from './App'
import store from './store/index'
import fly from './utils/fly'
// import 'mpvue-weui/src/style/weui.css';
import api from './utils/api'
import "./weui.css"

Vue.prototype.api=api

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$fly = fly;
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()

// console.log(getApp())
Vue.prototype.globalData = getApp().globalData

// icon图标
Vue.prototype.globalData.iconArray = {
    payIcon: ["icon-yundong",
            "icon-youxi",
            "icon-yundong1",
            "icon-lvyou",
            "icon-gouwu",
            "icon-jiaotong",
            "icon-shenghuo",
            "icon-xuexi-",
            "icon-shengri",
            "icon-canju",
            "icon-yiliao",
            "icon-huaban"]
    ,
    incomeIcon: [
        "icon-lijin",
        "icon-licai",
        "icon-jianzhi",
        "icon-yuangonggongzi"
    ]

}
