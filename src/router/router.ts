import { createRouter, createWebHistory } from 'vue-router'
import LoginAndRegistration from '@/pages/LoginAndRegistration.vue'
import MainPage from '@/pages/MainPage.vue'

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/Login&Registration',
        component: LoginAndRegistration
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;