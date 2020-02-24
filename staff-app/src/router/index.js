import Vue from 'vue'
import VueRouter from 'vue-router'
import Staff from '@/views/Staff'
import Employee from '@/components/Employee'
import EditEmployee from '@/components/EditEmployee'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/staff',
    component: Staff,
    children: [
      {path: '/staff/:id', component: Employee},
      {path: '/staff/:id/edit', component: EditEmployee}
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
