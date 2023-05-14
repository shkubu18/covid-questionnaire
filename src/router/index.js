import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonalInfoView from "@/views/questionnaire/PersonalInfoView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/kitkhvari/piradi-informacia',
            name: 'questionnaire.personal_info.show',
            component: PersonalInfoView
        }
    ]
})

export default router
