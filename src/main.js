// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Navbar, Form, FormGroup, FormInput, Button, FormTextarea, Layout, Media, Card } from 'bootstrap-vue/es/components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faAddressBook, faPhone, faEnvelope, faWrench, faLaptop, faCommentDots, faHeadphones, faFile, faPalette } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter)
library.add(faFacebook)
library.add(faLinkedinIn)
library.add(faAddressBook)
library.add(faPhone)
library.add(faEnvelope)
library.add(faWrench)
library.add(faLaptop)
library.add(faCommentDots)
library.add(faHeadphones)
library.add(faFile)
library.add(faPalette)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Navbar)
Vue.use(Form)
Vue.use(FormGroup)
Vue.use(FormInput)
Vue.use(Button)
Vue.use(FormTextarea)
Vue.use(Layout)
Vue.use(Media)
Vue.use(Card)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
