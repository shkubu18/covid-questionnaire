<template>
  <ValidationForm id="had-vaccine-form" @submit="onSubmit">
    <div class="mb-12">
      <p class="text-2xl font-bold mb-6">უკვე აცრილი ხარ?*</p>

      <input-radio
          id="yes"
          v-model="hadVaccine"
          label="კი"
          name="had_vaccine"
          rules="required"
          value="yes"
          @click="clearInput('iAmWaiting', 'i_am_waiting')"
      />
      <input-radio
          id="no"
          v-model="hadVaccine"
          label="არა"
          name="had_vaccine"
          rules="required"
          show-error="yes"
          value="no"
          @click="clearInput('vaccinationStage', 'vaccination_stage')"
      />
    </div>

    <div v-if="hadVaccine === 'yes'" class="mb-12">
      <p class="text-2xl font-bold mb-6">აირჩიე რა ეტაპზე ხარ?*</p>

      <input-radio
          id="first_dosage_and_registered_on_the_second"
          v-model="vaccinationStage"
          label="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
          name="vaccination_stage"
          rules="required"
          value="first_dosage_and_registered_on_the_second"
      />
      <input-radio
          id="fully_vaccinated"
          v-model="vaccinationStage"
          label="სრულად აცრილი ვარ"
          name="vaccination_stage"
          rules="required"
          value="fully_vaccinated"
      />
      <input-radio
          id="first_dosage_and_not_registered_yet"
          v-model="vaccinationStage"
          label="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
          name="vaccination_stage"
          rules="required"
          show-error="yes"
          value="first_dosage_and_not_registered_yet"
      />

      <div v-if="vaccinationStage === 'first_dosage_and_not_registered_yet'" class="pl-16 pt-7">
        <p class="font-bold text-xl">
          რომ არ გადადო, <br> ბარემ ახლავე დარეგისტრირდი <br>
          <a class="text-blue-600" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
        </p>
      </div>
    </div>

    <div v-if="hadVaccine === 'no'">
      <p class="text-2xl font-bold mb-6">რას ელოდები?*</p>

      <input-radio
          id="registered_and_waiting"
          v-model="iAmWaiting"
          label="დარეგისტრირებული ვარ და ველოდები რიცხვს"
          name="i_am_waiting"
          rules="required"
          value="registered_and_waiting"
      />
      <input-radio
          id="not_planning"
          v-model="iAmWaiting"
          label="არ ვგეგმავ"
          name="i_am_waiting"
          rules="required"
          value="not_planning"
      />
      <input-radio
          id="had_covid_and_planning_to_be_vaccinated"
          v-model="iAmWaiting"
          label="გადატანილი მაქვს და ვგეგმავ აცრას"
          name="i_am_waiting"
          rules="required"
          show-error="yes"
          value="had_covid_and_planning_to_be_vaccinated"
      />

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
    </div>
  </ValidationForm>

  <div class="absolute left-[46.5%] w-40 bottom-28 flex justify-between">
    <router-link :to="{ name: 'questionnaire.covid_condition.show' }">
      <icon-arrow-left/>
    </router-link>
    <button form="had-vaccine-form">
      <icon-arrow-right/>
    </button>
  </div>
</template>

<script>
import {Form as ValidationForm} from "vee-validate";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
import InputRadio from "@/components/ui/InputRadio.vue";

export default {
  components: {
    InputRadio,
    IconArrowLeft, IconArrowRight,
    ValidationForm,
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
      this.$store.dispatch('storeQuestionnaire', {
        inputName: 'vaccination_stage',
        inputValue: value
      })
    },
    iAmWaiting(value) {
      this.$store.dispatch('storeQuestionnaire', {
        inputName: 'i_am_waiting',
        inputValue: value
      })
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