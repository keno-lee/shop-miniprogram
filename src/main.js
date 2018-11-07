import Vue from 'vue'
import App from './App'

// 引入基础样式
import './styles/base.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
