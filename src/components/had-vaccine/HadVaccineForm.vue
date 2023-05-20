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
            @click="clearInput('iAmWaiting', 'i_am_waiting')"
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
            @click="clearInput('vaccinationStage', 'vaccination_stage')"
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
        <label class="text-xl font-bold ml-4" for="first_dosage_and_registered_on_the_second">პირველი დოზა და
          დარეგისტრირებული ვარ მეორეზე</label>
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
        <label class="text-xl font-bold ml-4" for="fully_vaccinated">სრულად აცრილი ვარ</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="first_dosage_and_not_registered_yet"
            v-model="vaccinationStage"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="vaccination_stage"
            type="radio"
            value="first_dosage_and_not_registered_yet"
        />
        <label class="text-xl font-bold ml-4" for="first_dosage_and_not_registered_yet">პირველი დოზა და არ
          დავრეგისტრირებულვარ
          მეორეზე</label>
      </div>

      <div v-if="vaccinationStage === 'first_dosage_and_not_registered_yet'" class="pl-16 pt-7">
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
            id="registered_and_waiting"
            v-model="iAmWaiting"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="i_am_waiting"
            rules="required"
            type="radio"
            value="registered_and_waiting"
        />
        <label class="text-xl font-bold ml-4" for="registered_and_waiting">დარეგისტრირებული ვარ და ველოდები
          რიცხვს</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="not_planning"
            v-model="iAmWaiting"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="i_am_waiting"
            type="radio"
            value="not_planning"
        />
        <label class="text-xl font-bold ml-4" for="not_planning">არ ვგეგმავ</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="had_covid_and_planning_to_be_vaccinated"
            v-model="iAmWaiting"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="i_am_waiting"
            type="radio"
            value="had_covid_and_planning_to_be_vaccinated"
        />
        <label class="text-xl font-bold ml-4" for="had_covid_and_planning_to_be_vaccinated">გადატანილი მაქვს და ვგეგმავ
          აცრას</label>
      </div>

      <div v-if="iAmWaiting === 'not_planning'" class="pl-16 mt-12">
        <a class="font-bold text-xl text-blue-600"
           href="https://booking.moh.gov.ge/">
          👉 https://booking.moh.gov.ge/
        </a>
      </div>

      <div v-if="iAmWaiting === 'had_covid_and_planning_to_be_vaccinated'" class="font-bold text-xl mt-12 pl-16">
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
      vaccinationStage: '',
      iAmWaiting: ''
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({name: 'questionnaire.covid_politics.show'})
    },
    clearInput(input, keyToDelete) {
      let storedQuestionnaire = JSON.parse(localStorage.getItem('questionnaire'));

      delete storedQuestionnaire[keyToDelete];

      localStorage.setItem('questionnaire', JSON.stringify(storedQuestionnaire));

      this[input] = '';
    }
  },
  watch: {
    hadVaccine(value) {
      this.$store.dispatch('storeQuestionnaire', {
        inputName: 'had_vaccine',
        inputValue: value
      })
    },
    vaccinationStage(value) {
      if (value !== '') {
        this.$store.dispatch('storeQuestionnaire', {
          inputName: 'vaccination_stage',
          inputValue: value
        })
      }
    },
    iAmWaiting(value) {
      if (value !== '') {
        this.$store.dispatch('storeQuestionnaire', {
          inputName: 'i_am_waiting',
          inputValue: value
        })
      }
    },
  },
  created() {
    const storedQuestionnaire = JSON.parse(localStorage.getItem('questionnaire'));

    this.hadVaccine = storedQuestionnaire.had_vaccine || '';
    this.vaccinationStage = storedQuestionnaire.vaccination_stage || '';
    this.iAmWaiting = storedQuestionnaire.i_am_waiting || '';
  }
}
</script>