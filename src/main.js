import Vue from 'vue'
import App from './App.vue'
import iView from "iview";
import "iview/dist/styles/iview.css";
import ajax from '@/config/http'

Vue.use(iView);
Vue.prototype.$axios = ajax;
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
