import Vue from 'vue'
import Router from 'vue-router'
import companyListComponent from '@/components/companyListComponent'
import companyComponent from '@/components/companyComponent'
import createCompanyComponent from '@/components/createCompanyComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'companyList',
      component: companyListComponent
    },
    {
      path: '/company/:companyId',
      name: 'company',
      component: companyComponent
    },
    {
      path: '/companyCreate',
      name: 'createCompany',
      component: createCompanyComponent
    }
  ]
})
