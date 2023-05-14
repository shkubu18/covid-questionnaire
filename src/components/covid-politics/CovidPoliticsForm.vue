<template>
    <ValidationForm>
        <p class="text-2xl font-bold mb-6">
            რა სიხშირით შეიძლება გვქონდეს საერთო <br> არაფორმალური ონლაინ შეხვედრები, სადაც ყველა <br> სურვილისამებრ
            ჩაერთვება?*
        </p>

        <div class="flex items-center pl-6 mb-6">
            <Field
                    id="twice_a_week"
                    class="text-black focus:ring-0 h-6 w-6 accent-black"
                    name="non_formal_meetings"
                    type="radio"
                    value="twice_a_week"
            />
            <label class="text-xl font-bold ml-4" for="twice_a_week">კვირაში ორჯერ</label>
        </div>
        <div class="flex items-center pl-6 mb-6">
            <Field
                    id="once_a_week"
                    class="text-black focus:ring-0 h-6 w-6 accent-black"
                    name="non_formal_meetings"
                    type="radio"
                    value="once_a_week"
            />
            <label class="text-xl font-bold ml-4" for="once_a_week">კვირაში ერთხელ</label>
        </div>
        <div class="flex items-center pl-6 mb-6">
            <Field
                    id="once_a_two_week"
                    class="text-black focus:ring-0 h-6 w-6 accent-black"
                    name="non_formal_meetings"
                    type="radio"
                    value="once_a_two_week"
            />
            <label class="text-xl font-bold ml-4" for="once_a_two_week">ორ კვირაში ერთხელ</label>
        </div>
        <div class="flex items-center pl-6 mb-12">
            <Field
                    id="once_a_month"
                    class="text-black focus:ring-0 h-6 w-6 accent-black"
                    name="non_formal_meetings"
                    type="radio"
                    value="once_a_month"
            />
            <label class="text-xl font-bold ml-4" for="once_a_month">თვეში ერთხელ</label>
        </div>

        <p class="text-2xl font-bold mb-6">
            კვირაში რამდენი დღე ისურვებდი ოფისიდან <br> მუშაობას?*
        </p>

        <div class="flex items-center pl-6 mb-6">
            <Field
                    id="0"
                    class="text-black focus:ring-0 h-6 w-6 accent-black"
                    name="number_of_days_from_office"
                    type="radio"
                    value="0"
            />
            <label class="text-xl font-bold ml-4" for="twice_a_week">0</label>
        </div>
        <div class="flex items-center pl-6 mb-6">
            <Field
                    id="1"
                    class="text-black focus:ring-0 h-6 w-6 accent-black"
                    name="number_of_days_from_office"
                    type="radio"
                    value="1"
            />
            <label class="text-xl font-bold ml-4" for="once_a_week">1</label>
        </div>
        <div class="flex items-center pl-6 mb-6">
            <Field
                    id="2"
                    class="text-black focus:ring-0 h-6 w-6 accent-black"
                    name="number_of_days_from_office"
                    type="radio"
                    value="2"
            />
            <label class="text-xl font-bold ml-4" for="once_a_two_week">2</label>
        </div>
        <div class="flex items-center pl-6 mb-6">
            <Field
                    id="3"
                    class="text-black focus:ring-0 h-6 w-6 accent-black"
                    name="number_of_days_from_office"
                    type="radio"
                    value="3"
            />
            <label class="text-xl font-bold ml-4" for="once_a_month">3</label>
        </div>
        <div class="flex items-center pl-6 mb-6">
            <Field
                    id="4"
                    class="text-black focus:ring-0 h-6 w-6 accent-black"
                    name="number_of_days_from_office"
                    type="radio"
                    value="4"
            />
            <label class="text-xl font-bold ml-4" for="once_a_month">4</label>
        </div>
        <div class="flex items-center pl-6 mb-12">
            <Field
                    id="5"
                    class="text-black focus:ring-0 h-6 w-6 accent-black"
                    name="number_of_days_from_office"
                    type="radio"
                    value="5"
            />
            <label class="text-xl font-bold ml-4" for="once_a_month">5</label>
        </div>


        <div class="w-textarea-width">
            <div class="flex flex-col mb-12">
                <label class="text-2xl font-bold mb-6" for="what_about_meetings_in_live">
                    რას ფიქრობ ფიზიკურ შეკრებებზე?
                </label>
                <Field
                        id="what_about_meetings_in_live"
                        as="textarea"
                        class="border-2 border-gray-600 bg-transparent p-2 focus:outline-none text-xl"
                        name="what_about_meetings_in_live"
                        rows="6"
                >
                </Field>
            </div>
            <div class="flex flex-col">
                <label class="text-2xl font-bold mb-6" for="what_about_meetings_in_live">
                    რას ფიქრობ არსებულ გარემოზე: <br> რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
                </label>
                <Field
                        id="tell_us_your_opinion_about_us"
                        as="textarea"
                        class="border-2 border-gray-600 bg-transparent p-2 focus:outline-none text-xl"
                        name="tell_us_your_opinion_about_us"
                        rows="6">
                </Field>
            </div>

            <div class="text-right mb-28">
                <button
                        class="bg-button-color text-white py-4 px-7 font-bold text-xl mt-14 rounded-full border-0"
                        type="submit">
                    დასრულება
                </button>
            </div>

            <button class="absolute right-1/2 bottom-28" form="personal-info-form">
                <icon-arrow-left></icon-arrow-left>
            </button>
        </div>
    </ValidationForm>
</template>


<script>
import {Form as ValidationForm, Field} from "vee-validate";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";


export default {
    components: {
        IconArrowLeft,
        ValidationForm,
        Field,
    },
}
</script>