// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// import router from './router'
// import 'element-ui/lib/theme-default/index.css'
import '../theme/index.css'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI)

// Vue.directive('focus', {
//   // 当绑定元素插入到 DOM 中。
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  template: '<App/>',
  components: { App }
})
