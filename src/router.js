import VueRouter from 'vue-router';

import Base from './components/base.vue'
import Home from './components/home.vue'
import Ops from './pages/ops/ops.vue'
import Api from './pages/api/api.vue'
import Git from './pages/git/git.vue'
import Wiki from './pages/wiki/wiki.vue'

const routes = [
    {
        path: '/',
        component: Base
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/ops',
        component: Ops
    },
    {
        path: '/api',
        component: Api
    },
    {
        path: '/git',
        component: Git
    },
    {
        path: '/wiki',
        component: Wiki
    },
]

const router = new VueRouter({
    routes
})
export default router