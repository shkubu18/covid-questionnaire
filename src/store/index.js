import {createStore} from "vuex";
import personalInfoModule from "./modules/questionnaire/personalInfo"
import covidCondition from "./modules/questionnaire/covidCondition";
import hadVaccine from "@/store/modules/questionnaire/hadVaccine";

export default createStore({
    modules: {
        personalInfo: personalInfoModule,
        covidCondition: covidCondition,
        hadVaccine: hadVaccine
    },
    state() {
        return {
            showElement: false,
            questionnaire: {}
        }
    },
    mutations: {
        setShowElement(state) {
            state.showElement = true
        },
        storeQuestionnaire(state, payload) {
            const {inputName, inputValue} = payload;

            const storedQuestionnaire = JSON.parse(localStorage.getItem('questionnaire'));

            if (storedQuestionnaire) {
                state.questionnaire = storedQuestionnaire;
            }

            if (inputValue !== '') {
                if (inputName === 'test_date' || inputName === 'number') {
                    state.questionnaire = {
                        ...state.questionnaire,
                        antibodies: {...state.questionnaire.antibodies, [inputName]: inputValue}
                    }
                } else {
                    state.questionnaire = {...state.questionnaire, [inputName]: inputValue};
                }
            }

            localStorage.setItem('questionnaire', JSON.stringify(state.questionnaire));
        }
    },
    actions: {
        setShowElement(context) {
            context.commit('setShowElement')
        },
        storeQuestionnaire(context, payload) {
            context.commit('storeQuestionnaire', payload);
        },
    },
    getters: {
        showElement(state) {
            return state.showElement
        },
        questionnaire(state) {
            return state.questionnaire
        }
    },
});