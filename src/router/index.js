import Vue from 'vue'
import Router from 'vue-router'

import Lista from '@/views/Lista'
import Cadastro from '@/views/Cadastro'

Vue.use(Router)

const routes = [
    {
        name: 'lista',
        path: '/',
        component: Lista
    },
    {
        name: 'cadastro',
        path:'/cadastro',
        component: Cadastro
    }
]

const router = new Router( { routes } )

export default router