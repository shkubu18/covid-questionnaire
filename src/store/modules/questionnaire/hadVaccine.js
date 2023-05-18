export default {
    namespaced: true,
    mutations: {
        storeInputValue(store, payload) {
            const {inputName, inputValue} = payload;

            localStorage.setItem(inputName, inputValue);
        },
    },
    actions: {
        storeInputValue(context, payload) {
            context.commit('storeInputValue', payload);
        },
    }
}