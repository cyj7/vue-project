// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import ElementUI from 'element-ui';
// import { DatePicker, Select, Option } from 'element-ui'
import { DatePicker } from 'element-ui'
// import 'element-ui/lib/theme-chalk/dropdown.css'
// import '../static/css/reset.css'


Vue.config.productionTip = false;
Vue.prototype.$axios = axios; //api请求

// Vue.use(ElementUI);

//日期控件
Vue.use(DatePicker);

// Vue.use(Select);
// Vue.use(Option);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
