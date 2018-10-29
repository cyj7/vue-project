// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import ElementUI from 'element-ui';
// import { DatePicker, Select, Option } from 'element-ui'
import { Upload, Tree } from 'element-ui'
// import 'element-ui/lib/theme-chalk/dropdown.css'
// import '../static/css/reset.css'
import '@/style/font/iconfont.css'


Vue.config.productionTip = false;
Vue.prototype.$axios = axios; //api请求

// Vue.use(ElementUI);

//菜单控件
Vue.use(Tree);

//上传
Vue.use(Upload);

// Vue.use(Select);
// Vue.use(Option);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



