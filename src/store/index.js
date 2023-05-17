import {createStore} from "vuex";

export default createStore({
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