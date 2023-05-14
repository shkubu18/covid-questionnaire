import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonalInfoView from "@/views/questionnaire/PersonalInfoView.vue"
import CovidConditionView from "@/views/questionnaire/CovidConditionView.vue";
import HadVaccineView from "@/views/questionnaire/HadVaccineView.vue";

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
        },
        {
            path: '/kitkhvari/covid-mdgomareoba',
            name: 'questionnaire.covid_condition.show',
            component: CovidConditionView
        },
        {
            path: '/kitkhvari/vaktsina',
            name: 'questionnaire.had_vaccine.show',
            component: HadVaccineView
        }
    ]
})

export default router
