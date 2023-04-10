import Vue from 'vue'
//import App from './App.vue'
//import Text from './views/Text.vue'
//import AttributeBind from './views/AttributeBind'
//import EventBind from './views/EventBind'
//import Model from './views/Model'
//import Computed from './views/Computed'
//import Axios from './views/Axios'
//import ListRender from './views/ListRender'
import ComponentReuse from  './views/ComponentReuse'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(ComponentReuse)
}).$mount('#app')
