import Vue from 'vue'
import App from './App.vue'
import LikeNumer from './components/LikeNumber.vue'

Vue.config.productionTip = false

//componentのグローバル登録
Vue.component('LikeNumber', LikeNumer)

new Vue({
  render: h => h(App),
}).$mount('#app')
