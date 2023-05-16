<template>
    <ValidationForm>
        <div>
            <p class="text-2xl font-bold mb-6">გაქვს გადატანილი Covid-19?*</p>

            <div class="flex items-center pl-6 mb-6">
                <Field
                        id="yes"
                        class="text-black focus:ring-0 h-6 w-6 accent-black"
                        name="had_covid"
                        type="radio"
                        value="yes"
                />
                <label class="text-xl font-bold ml-4" for="yes">კი</label>
            </div>
            <div class="flex items-center pl-6 mb-6">
                <Field
                        id="no"
                        class="text-black focus:ring-0 h-6 w-6 accent-black"
                        name="had_covid"
                        type="radio"
                        value="no"
                />
                <label class="text-xl font-bold ml-4" for="no">არა</label>
            </div>
            <div class="flex items-center pl-6 mb-6">
                <Field
                        id="have_it_now"
                        class="text-black focus:ring-0 h-6 w-6 accent-black"
                        name="had_covid"
                        type="radio"
                        value="have_it_now"
                />
                <label class="text-xl font-bold ml-4" for="have_it_now">ახლა მაქვს</label>
            </div>
        </div>
        <ErrorMessage name="had_covid"/>

        <!--TODO -->

        <!--        <p class="text-2xl font-bold mb-6">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>-->

        <!--        <div class="flex items-center pl-6 mb-6">-->
        <!--            <Field-->
        <!--                    id="yes"-->
        <!--                    class="text-black focus:ring-0 h-6 w-6 accent-black"-->
        <!--                    name="had_antibody_test"-->
        <!--                    type="radio"-->
        <!--                    value="yes"-->
        <!--            />-->
        <!--            <label class="text-xl font-bold ml-4" for="yes">კი</label>-->
        <!--        </div>-->
        <!--        <div class="flex items-center pl-6 mb-6">-->
        <!--            <Field-->
        <!--                    id="no"-->
        <!--                    class="text-black focus:ring-0 h-6 w-6 accent-black"-->
        <!--                    name="had_antibody_test"-->
        <!--                    type="radio"-->
        <!--                    value="no"-->
        <!--            />-->
        <!--            <label class="text-xl font-bold ml-4" for="no">არა</label>-->
        <!--        </div>-->

        <!--        <p class="text-2xl font-bold mb-6">-->
        <!--            თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br> რიცხვი და ანტისხეულების რაოდენობა*-->
        <!--        </p>-->

        <!--        <div class="flex flex-col mb-10 w-1/3 pl-6">-->
        <!--            <Field-->
        <!--                    class="p-3 mb-6 bg-transparent border-2 border-gray-600 placeholder:text-gray-600 focus:outline-none"-->
        <!--                    name="test_date"-->
        <!--                    placeholder="რიცხვი"-->
        <!--                    type="text"-->
        <!--            />-->

        <!--            <Field-->
        <!--                    class="p-3 bg-transparent border-2 border-gray-600 placeholder:text-gray-600 focus:outline-none"-->
        <!--                    name="test_date"-->
        <!--                    placeholder="ანტისხეულების რაოდენობა"-->
        <!--                    type="text"-->
        <!--            />-->
        <!--        </div>-->

        <!--        <p class="text-2xl font-bold mb-6">მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br> როდის გქონდა Covid-19*</p>-->

        <!--        <div class="flex flex-col mb-10 w-1/3 pl-6">-->
        <!--            <Field-->
        <!--                    class="p-3 mb-6 bg-transparent border-2 border-gray-600 placeholder:text-gray-600 focus:outline-none"-->
        <!--                    name="date_of_possession_of_covid"-->
        <!--                    placeholder="დდ/თთ/წწ"-->
        <!--                    type="text"-->
        <!--            />-->
        <!--        </div>-->
    </ValidationForm>

    <div class="absolute left-[46.5%] w-40 bottom-28 flex justify-between">
        <button>
            <icon-arrow-left></icon-arrow-left>
        </button>
        <button form="personal-info-form">
            <icon-arrow-right></icon-arrow-right>
        </button>
    </div>
</template>

<script>
import {Form as ValidationForm, Field, ErrorMessage} from "vee-validate";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";

export default {
    components: {
        IconArrowLeft,
        IconArrowRight,
        ValidationForm,
        Field,
        ErrorMessage,
    },
}
</script>