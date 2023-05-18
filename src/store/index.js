import {createStore} from "vuex";
import personalInfoModule from "./modules/questionnaire/personalInfo"
import covidCondition from "./modules/questionnaire/covidCondition";

export default createStore({
    modules: {
        personalInfo: personalInfoModule,
        covidCondition: covidCondition
    },
    state() {
        return {
            showElement: false
        }
    },
    mutations: {
        setShowElement(state) {
            state.showElement = true
        }
    },
    actions: {
        setShowElement(context) {
            context.commit('setShowElement')
        }
    },
    getters: {
        showElement(state) {
            return state.showElement
        }
    }
});