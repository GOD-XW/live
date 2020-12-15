import Vue from 'vue'
import App from './App'
// import './style/iconfont.css'

Vue.config.productionTip = false
//引入全局组件
import divider from './components/common/divider.vue';
import noThing from './components/common/no-thing.vue';
Vue.component('divider',divider)
Vue.component('no-thing',noThing)


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
