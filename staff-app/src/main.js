import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data: () => ({
    staff: [
      {
        name: "Kalle Svensson",
        title: "Sekreterare",
        phoneNumber: "0707723783",
        email: "kalle.svensson@gmail.com",
        id: 0
      },
      {
        name: "Ali Abduzeedo",
        title: "VD",
        phoneNumber: "0704336774",
        email: "ali.abduzeedo@gmail.com",
        id: 1
      },
      {
        name: "Minette Smith",
        title: "Front-end Developer",
        phoneNumber: "0707545473",
        email: "minette.smith@gmail.com",
        id: 2
      }
    ]
  }),
  render: h => h(App)
}).$mount('#app')
