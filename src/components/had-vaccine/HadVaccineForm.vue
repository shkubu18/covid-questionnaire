<template>
    <ValidationForm>
        <div>
            <p class="text-2xl font-bold mb-6">უკვე აცრილი ხარ?*</p>

            <div class="flex items-center pl-6 mb-6">
                <Field
                        id="yes"
                        class="text-black focus:ring-0 h-6 w-6 accent-black"
                        name="had_vaccine"
                        type="radio"
                        value="yes"
                />
                <label class="text-xl font-bold ml-4" for="yes">კი</label>
            </div>
            <div class="flex items-center pl-6 mb-6">
                <Field
                        id="no"
                        class="text-black focus:ring-0 h-6 w-6 accent-black"
                        name="had_vaccine"
                        type="radio"
                        value="no"
                />
                <label class="text-xl font-bold ml-4" for="no">არა</label>
            </div>

            <!--TODO-->

            <!--            <div>-->
            <!--                <p class="text-2xl font-bold mb-6">აირჩიე რა ეტაპზე ხარ?*</p>-->

            <!--                <div class="flex items-center pl-6 mb-6">-->
            <!--                    <Field-->
            <!--                            id="first_dosage_and_registered_on_the_second"-->
            <!--                            class="text-black focus:ring-0 h-6 w-6 accent-black"-->
            <!--                            name="vaccination_stage"-->
            <!--                            type="radio"-->
            <!--                            value="first_dosage_and_registered_on_the_second"-->
            <!--                    />-->
            <!--                    <label class="text-xl font-bold ml-4" for="yes">პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label>-->
            <!--                </div>-->
            <!--                <div class="flex items-center pl-6 mb-6">-->
            <!--                    <Field-->
            <!--                            id="fully_vaccinated"-->
            <!--                            class="text-black focus:ring-0 h-6 w-6 accent-black"-->
            <!--                            name="vaccination_stage"-->
            <!--                            type="radio"-->
            <!--                            value="fully_vaccinated"-->
            <!--                    />-->
            <!--                    <label class="text-xl font-bold ml-4" for="no">სრულად აცრილი ვარ</label>-->
            <!--                </div>-->
            <!--                <div class="flex items-center pl-6 mb-6">-->
            <!--                    <Field-->
            <!--                            id="first_dosage_and_not_registered_on_the_second"-->
            <!--                            class="text-black focus:ring-0 h-6 w-6 accent-black"-->
            <!--                            name="vaccination_stage"-->
            <!--                            type="radio"-->
            <!--                            value="first_dosage_and_not_registered_on_the_second"-->
            <!--                    />-->
            <!--                    <label class="text-xl font-bold ml-4" for="no">პირველი დოზა და არ დავრეგისტრირებულვარ-->
            <!--                        მეორეზე</label>-->
            <!--                </div>-->

            <!--                <div class="pl-16 pt-7">-->
            <!--                    <p class="font-bold text-xl">-->
            <!--                        რომ არ გადადო, <br> ბარემ ახლავე დარეგისტრირდი <br>-->
            <!--                        <a class="text-blue-600" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>-->
            <!--                    </p>-->
            <!--                </div>-->
            <!--            </div>-->


            <!--            <div>-->
            <!--                <p class="text-2xl font-bold mb-6">რას ელოდები?*</p>-->

            <!--                <div class="flex items-center pl-6 mb-6">-->
            <!--                    <Field-->
            <!--                            id="registered_and_waiting_for_a_number"-->
            <!--                            class="text-black focus:ring-0 h-6 w-6 accent-black"-->
            <!--                            name="vaccination_stage"-->
            <!--                            type="radio"-->
            <!--                            value="registered_and_waiting_for_a_number"-->
            <!--                    />-->
            <!--                    <label class="text-xl font-bold ml-4" for="yes">დარეგისტრირებული ვარ და ველოდები რიცხვს</label>-->
            <!--                </div>-->
            <!--                <div class="flex items-center pl-6 mb-6">-->
            <!--                    <Field-->
            <!--                            id="does_not_plan"-->
            <!--                            class="text-black focus:ring-0 h-6 w-6 accent-black"-->
            <!--                            name="vaccination_stage"-->
            <!--                            type="radio"-->
            <!--                            value="does_not_plan"-->
            <!--                    />-->
            <!--                    <label class="text-xl font-bold ml-4" for="no">არ ვგეგმავ</label>-->
            <!--                </div>-->
            <!--                <div class="flex items-center pl-6 mb-6">-->
            <!--                    <Field-->
            <!--                            id="passed_and_plan_to_get_vaccinated"-->
            <!--                            class="text-black focus:ring-0 h-6 w-6 accent-black"-->
            <!--                            name="vaccination_stage"-->
            <!--                            type="radio"-->
            <!--                            value="passed_and_plan_to_get_vaccinated"-->
            <!--                    />-->
            <!--                    <label class="text-xl font-bold ml-4" for="no">გადატანილი მაქვს და ვგეგმავ აცრას</label>-->
            <!--                </div>-->

            <!--                <div class="pl-16 pt-7">-->
            <!--                    <a class="font-bold text-xl text-blue-600" href="https://booking.moh.gov.ge/">-->
            <!--                        👉 https://booking.moh.gov.ge/-->
            <!--                    </a>-->

            <!--                    &lt;!&ndash; OR &ndash;&gt;-->
            <!--                    <div class="font-bold text-xl">-->
            <!--                        <p class="mb-6">-->
            <!--                            ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br> თვის შემდეგ შეგიძლიათ-->
            <!--                            ვაქცინის გაკეთება.-->
            <!--                        </p>-->
            <!--                        <a class="text-blue-600" href="https://booking.moh.gov.ge/" target="_blank">-->
            <!--                            <span class="text-black">👉 რეგისტრაციის ბმული</span> <br>-->
            <!--                            https://booking.moh.gov.ge/-->
            <!--                        </a>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
        </div>
        <ErrorMessage name="had_vaccine"/>
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
        IconArrowLeft, IconArrowRight,
        ValidationForm,
        Field,
        ErrorMessage,
    },
}
</script>