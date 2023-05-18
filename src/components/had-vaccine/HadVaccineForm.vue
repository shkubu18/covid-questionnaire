<template>
  <ValidationForm id="had-vaccine-form" @submit="onSubmit">
    <div class="mb-12">
      <p class="text-2xl font-bold mb-6">უკვე აცრილი ხარ?*</p>

      <div class="flex items-center pl-6 mb-6">
        <Field
            id="yes"
            v-model="hadVaccine"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="had_vaccine"
            rules="required"
            type="radio"
            value="yes"
        />
        <label class="text-xl font-bold ml-4" for="yes">კი</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="no"
            v-model="hadVaccine"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="had_vaccine"
            type="radio"
            value="no"
        />
        <label class="text-xl font-bold ml-4" for="no">არა</label>
      </div>
      <ErrorMessage class="pl-3.5 text-error-message-color" name="had_vaccine"/>
    </div>


    <div v-if="hadVaccine === 'yes'" class="mb-12">
      <p class="text-2xl font-bold mb-6">აირჩიე რა ეტაპზე ხარ?*</p>

      <div class="flex items-center pl-6 mb-6">
        <Field
            id="first_dosage_and_registered_on_the_second"
            v-model="vaccinationStage"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="vaccination_stage"
            rules="required"
            type="radio"
            value="first_dosage_and_registered_on_the_second"
        />
        <label class="text-xl font-bold ml-4" for="yes">პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="fully_vaccinated"
            v-model="vaccinationStage"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="vaccination_stage"
            type="radio"
            value="fully_vaccinated"
        />
        <label class="text-xl font-bold ml-4" for="no">სრულად აცრილი ვარ</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="first_dosage_and_not_registered_on_the_second"
            v-model="vaccinationStage"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="vaccination_stage"
            type="radio"
            value="first_dosage_and_not_registered_on_the_second"
        />
        <label class="text-xl font-bold ml-4" for="no">პირველი დოზა და არ დავრეგისტრირებულვარ
          მეორეზე</label>
      </div>

      <div v-if="vaccinationStage === 'first_dosage_and_not_registered_on_the_second'" class="pl-16 pt-7">
        <p class="font-bold text-xl">
          რომ არ გადადო, <br> ბარემ ახლავე დარეგისტრირდი <br>
          <a class="text-blue-600" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
        </p>
      </div>

      <ErrorMessage class="pl-3.5 text-error-message-color" name="vaccination_stage"/>
    </div>


    <div v-if="hadVaccine === 'no'">
      <p class="text-2xl font-bold mb-6">რას ელოდები?*</p>

      <div class="flex items-center pl-6 mb-6">
        <Field
            id="registered_and_waiting_for_a_number"
            v-model="vaccinationStage"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="vaccination_stage"
            rules="required"
            type="radio"
            value="registered_and_waiting_for_a_number"
        />
        <label class="text-xl font-bold ml-4" for="yes">დარეგისტრირებული ვარ და ველოდები რიცხვს</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="does_not_plan"
            v-model="vaccinationStage"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="vaccination_stage"
            type="radio"
            value="does_not_plan"
        />
        <label class="text-xl font-bold ml-4" for="no">არ ვგეგმავ</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="passed_and_plan_to_get_vaccinated"
            v-model="vaccinationStage"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="vaccination_stage"
            type="radio"
            value="passed_and_plan_to_get_vaccinated"
        />
        <label class="text-xl font-bold ml-4" for="no">გადატანილი მაქვს და ვგეგმავ აცრას</label>
      </div>

      <div v-if="vaccinationStage === 'does_not_plan'" class="pl-16 mt-12">
        <a class="font-bold text-xl text-blue-600"
           href="https://booking.moh.gov.ge/">
          👉 https://booking.moh.gov.ge/
        </a>
      </div>

      <div v-if="vaccinationStage === 'passed_and_plan_to_get_vaccinated'" class="font-bold text-xl mt-12 pl-16">
        <p class="mb-6">
          ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br> თვის შემდეგ შეგიძლიათ
          ვაქცინის გაკეთება.
        </p>
        <a class="text-blue-600" href="https://booking.moh.gov.ge/" target="_blank">
          <span class="text-black">👉 რეგისტრაციის ბმული</span> <br>
          https://booking.moh.gov.ge/
        </a>
      </div>

      <ErrorMessage class="pl-3.5 text-error-message-color" name="vaccination_stage"/>
    </div>
  </ValidationForm>

  <div class="absolute left-[46.5%] w-40 bottom-28 flex justify-between">
    <router-link :to="{ name: 'questionnaire.covid_condition.show' }">
      <icon-arrow-left></icon-arrow-left>
    </router-link>
    <button form="had-vaccine-form">
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
  data() {
    return {
      hadVaccine: '',
      vaccinationStage: ''
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({name: 'questionnaire.covid_politics.show'})
    }
  },
  watch: {
    hadVaccine(value) {
      this.$store.dispatch('covidCondition/storeInputValue', {
        inputName: 'hadVaccine',
        inputValue: value
      })
    },
    vaccinationStage(value) {
      this.$store.dispatch('covidCondition/storeInputValue', {
        inputName: 'vaccinationStage',
        inputValue: value
      })
    },
  },
  created() {
    const inputs = ['hadVaccine', 'vaccinationStage'];

    inputs.forEach((input) => {
      const storedValue = localStorage.getItem(input);

      if (storedValue) {
        this[input] = storedValue;
      }
    });
  }
}
</script>