<template>
    <ValidationForm id="personal-info-form" class="w-1/3" @submit="onSubmit">
        <div class="flex flex-col mb-10">
            <label class="text-2xl font-bold mb-2" for="first_name">სახელი*</label>
            <Field
                    id="first_name"
                    v-model="firstName"
                    class="p-3 bg-transparent border-2 border-gray-600 placeholder:text-gray-600 focus:outline-none"
                    name="first_name"
                    placeholder="დათა"
                    rules="required|min:3"
                    type="text"
            />
            <ErrorMessage class="ml-3.5 text-error-message-color" name="first_name"/>
        </div>
        <div class="flex flex-col mb-10">
            <label class="text-2xl font-bold mb-2" for="last_name">გვარი*</label>
            <Field
                    id="last_name"
                    v-model="lastName"
                    class="p-3 bg-transparent border-2 border-gray-600 placeholder:text-gray-600 focus:outline-none"
                    name="last_name"
                    placeholder="შკუბულიანი"
                    rules="required|min:3"
                    type="text"
            />
            <ErrorMessage class="ml-3.5 text-error-message-color" name="last_name"/>
        </div>
        <div class="flex flex-col mb-24">
            <label class="text-2xl font-bold mb-2" for="email">მეილი*</label>
            <Field
                    id="email"
                    v-model="email"
                    class="p-3 bg-transparent border-2 border-gray-600 placeholder:text-gray-600 focus:outline-none"
                    name="email"
                    placeholder="fbi@redberry.ge"
                    rules="required|email|redberry_email"
                    type="text"
            />
            <ErrorMessage class="ml-3.5 text-error-message-color" name="email"/>
        </div>
    </ValidationForm>
    <button class="absolute right-1/2 bottom-28" form="personal-info-form">
        <icon-arrow-right></icon-arrow-right>
    </button>
</template>

<script>
import {Form as ValidationForm, Field, ErrorMessage} from "vee-validate";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import router from "@/router";

export default {
    components: {
        IconArrowRight,
        ValidationForm,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            firstName: '',
            lastName: '',
            email: ''
        }
    },
    methods: {
        onSubmit() {
            router.push({name: 'questionnaire.covid_condition.show'})
        }
    },
    watch: {
        firstName(value) {
            this.$store.dispatch('personalInfo/storeInputValue', {
                inputName: 'firstName',
                inputValue: value
            })
        },
        lastName(value) {
            this.$store.dispatch('personalInfo/storeInputValue', {
                inputName: 'lastName',
                inputValue: value
            })
        },
        email(value) {
            this.$store.dispatch('personalInfo/storeInputValue', {
                inputName: 'email',
                inputValue: value
            })
        },
    },
    created() {
        const inputs = ['firstName', 'lastName', 'email'];

        inputs.forEach((input) => {
            const storedValue = localStorage.getItem(input);

            if (storedValue) {
                this[input] = storedValue;
            }
        });
    }
}
</script>