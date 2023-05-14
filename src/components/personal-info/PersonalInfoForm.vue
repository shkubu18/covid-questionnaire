<template>
    <ValidationForm id="personal-info-form" class="w-1/3" @submit="onSubmit">
        <div class="flex flex-col mb-10">
            <label class="text-2xl font-bold mb-2" for="first_name">სახელი*</label>
            <Field
                    id="first_name"
                    class="p-3 bg-transparent border-2 border-gray-600 placeholder:text-gray-600 focus:outline-none"
                    name="first_name"
                    placeholder="დათა"
                    type="text"
            />
            <ErrorMessage name="first_name"/>
        </div>
        <div class="flex flex-col mb-10">
            <label class="text-2xl font-bold mb-2" for="last_name">გვარი*</label>
            <Field
                    id="last_name"
                    class="p-3 bg-transparent border-2 border-gray-600 placeholder:text-gray-600 focus:outline-none"
                    name="last_name"
                    placeholder="შკუბულიანი"
                    type="text"
            />
            <ErrorMessage name="last_name"/>
        </div>
        <div class="flex flex-col mb-24">
            <label class="text-2xl font-bold mb-2" for="email">მეილი*</label>
            <Field
                    id="email"
                    class="p-3 bg-transparent border-2 border-gray-600 placeholder:text-gray-600 focus:outline-none"
                    name="email"
                    placeholder="fbi@redberry.ge"
                    type="text"
            />
            <ErrorMessage name="email"/>
        </div>
    </ValidationForm>
    <button class="absolute right-1/2 bottom-28" form="personal-info-form">
        <icon-arrow-right></icon-arrow-right>
    </button>
</template>

<script>
import {Form as ValidationForm, Field, ErrorMessage} from "vee-validate";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";

export default {
    components: {
        IconArrowRight,
        ValidationForm,
        Field,
        ErrorMessage,
    },
}
</script>