// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'
import App from './App'

import messages from './translations'

Vue.use(VueResource)
Vue.use(VueI18n)

const userLang = (navigator.language || navigator.userLanguage).split("-")[0];
const defaultLocale = userLang == 'fr' ? 'fr' : 'en';

const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages
})

Vue.config.productionTip = process.env.NODE_ENV === 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  i18n
})
