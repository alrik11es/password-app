// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'

import store from './store'

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// var csv is the CSV file with headers
function csvJSON (csv) {
  let lines = csv.split('\n')
  let result = []
  let headers = lines[0].split(',')
  for (let i = 1; i < lines.length; i++) {
    let obj = {}
    let currentline = lines[i].split(',')
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j]
    }
    result.push(obj)
  }
  // return result; //JavaScript object
  return JSON.stringify(result) // JSON
}
