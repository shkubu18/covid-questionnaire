import {createStore} from "vuex";
import personalInfoModule from "./modules/questionnaire/personalInfo"

export default createStore({
    modules: {
        personalInfo: personalInfoModule
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