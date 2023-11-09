import Vue from 'vue'
import App from './App.vue'

// 引入组件的样式+组件
import '../components/css/ChenButton.scss'
// import DemoVue from '../components/lib/demo/src/main.vue'
import ChenButton from '../components/lib/ChenButton/index.js'

// 组件全局注册
// Vue.component(DemoVue.name, DemoVue)
Vue.use(ChenButton)


Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')