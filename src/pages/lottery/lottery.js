import Vue from 'vue'
import App from './lottery.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#index')