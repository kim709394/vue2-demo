import Vue from 'vue'
//import App from './App.vue'
//import Text from './views/Text.vue'
//import AttributeBind from './views/AttributeBind'
//import EventBind from './views/EventBind'
//import Model from './views/Model'
//import Computed from './views/Computed'
//import Axios from './views/Axios'
//import ListRender from './views/ListRender'
//import ComponentReuse from  './views/ComponentReuse'
import ElementUIDemo from './views/ElementUIDemo'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

new Vue({
  router,
  store,
  render: h => h(ElementUIDemo)
}).$mount('#app')
