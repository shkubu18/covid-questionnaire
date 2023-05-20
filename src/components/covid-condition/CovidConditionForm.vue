<template>
  <ValidationForm id="covid-condition-form" @submit="onSubmit">
    <div class="mb-12">
      <p class="text-2xl font-bold mb-6">გაქვს გადატანილი Covid-19?*</p>

      <div class="flex items-center pl-6 mb-6">
        <Field
            id="yes"
            v-model="hadCovid"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="had_covid"
            rules="required"
            type="radio"
            value="yes"
        />
        <label class="text-xl font-bold ml-4" for="yes">კი</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="no"
            v-model="hadCovid"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="had_covid"
            type="radio"
            value="no"
            @click="clearInput(['hadAntibodyTest', 'covidSicknessDate', 'antibodiesTestDate', 'numberOfAntibodies'], ['had_antibody_test', 'covid_sickness_date', 'antibodies'])"
        />
        <label class="text-xl font-bold ml-4" for="no">არა</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="have_right_now"
            v-model="hadCovid"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="had_covid"
            type="radio"
            value="have_right_now"
            @click="clearInput(['hadAntibodyTest', 'covidSicknessDate', 'antibodiesTestDate', 'numberOfAntibodies'], ['had_antibody_test', 'covid_sickness_date', 'antibodies'])"
        />
        <label class="text-xl font-bold ml-4" for="have_right_now">ახლა მაქვს</label>
      </div>
    </div>
    <ErrorMessage class="pl-3.5 text-error-message-color" name="had_covid"/>

    <div v-if="hadCovid === 'yes'" class="mb-12">
      <p class="text-2xl font-bold mb-6">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>

      <div class="flex items-center pl-6 mb-6">
        <Field
            id="had_antibody_test_yes"
            v-model="hadAntibodyTest"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="had_antibody_test"
            rules="required"
            type="radio"
            value="yes"
            @click="clearInput(['covidSicknessDate'], ['covid_sickness_date'])"
        />
        <label class="text-xl font-bold ml-4" for="had_antibody_test_yes">კი</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="had_antibody_test_no"
            v-model="hadAntibodyTest"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="had_antibody_test"
            type="radio"
            value="no"
            @click="clearInput(['antibodiesTestDate', 'numberOfAntibodies'], ['antibodies'])"
        />
        <label class="text-xl font-bold ml-4" for="had_antibody_test_no">არა</label>
      </div>
    </div>

    <div v-if="hadAntibodyTest === 'yes' && hadCovid === 'yes'">
      <p class="text-2xl font-bold mb-6">
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br> რიცხვი და ანტისხეულების რაოდენობა*
      </p>

      <div class="flex flex-col mb-10 w-1/3 pl-6">
        <Field
            v-model="antibodiesTestDate"
            class="p-3 bg-transparent border-2 border-gray-600 placeholder:text-gray-600 focus:outline-none"
            name="test_date"
            placeholder="რიცხვი"
            rules="antibodies_date_format"
            type="text"
        />

        <ErrorMessage class="pl-3.5 mt-3 text-error-message-color" name="test_date"/>

        <Field
            v-model="numberOfAntibodies"
            class="p-3 mt-6 bg-transparent border-2 border-gray-600 placeholder:text-gray-600 focus:outline-none"
            name="number"
            placeholder="ანტისხეულების რაოდენობა"
            rules="integer"
            type="text"
        />

        <ErrorMessage class="pl-3.5 mt-3 text-error-message-color" name="number"/>
      </div>
    </div>

    <div v-if="hadAntibodyTest === 'no'  && hadCovid === 'yes'">
      <p class="text-2xl font-bold mb-6">მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br> როდის გქონდა Covid-19*
      </p>

      <div class="flex flex-col w-1/3 pl-6">
        <Field
            v-model="covidSicknessDate"
            class="p-3 bg-transparent border-2 border-gray-600 placeholder:text-gray-600 focus:outline-none"
            name="covid_sickness_date"
            placeholder="დდ/თთ/წწ"
            rules="required|date_format"
            type="text"
        />

        <ErrorMessage class="pl-3.5 mt-3 text-error-message-color" name="covid_sickness_date"/>
      </div>
    </div>
  </ValidationForm>

  <div class="absolute left-[46.5%] w-40 bottom-28 flex justify-between z-20">
    <router-link :to="{ name: 'questionnaire.personal_info.show' }">
      <icon-arrow-left></icon-arrow-left>
    </router-link>
    <button form="covid-condition-form">
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
  data() {
    return {
      hadCovid: '',
      hadAntibodyTest: '',
      antibodiesTestDate: '',
      numberOfAntibodies: '',
      covidSicknessDate: ''
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({name: 'questionnaire.had_vaccine.show'})
    },
    clearInput(inputs, keysToDelete) {
      let storedQuestionnaire = JSON.parse(localStorage.getItem('questionnaire'));

      keysToDelete.forEach((keyToDelete) => {
        delete storedQuestionnaire[keyToDelete];
      })

      localStorage.setItem('questionnaire', JSON.stringify(storedQuestionnaire));

      inputs.forEach((input) => {
        this[input] = ''
      })
    }
  },
  watch: {
    hadCovid(value) {
      this.$store.dispatch('storeQuestionnaire', {
        inputName: 'had_covid',
        inputValue: value
      })
    },
    hadAntibodyTest(value) {
      this.$store.dispatch('storeQuestionnaire', {
        inputName: 'had_antibody_test',
        inputValue: value
      })
    },
    antibodiesTestDate(value) {
      this.$store.dispatch('storeQuestionnaire', {
        inputName: 'test_date',
        inputValue: value
      })
    },
    numberOfAntibodies(value) {
      this.$store.dispatch('storeQuestionnaire', {
        inputName: 'number',
        inputValue: value
      })

    },
    covidSicknessDate(value) {
      this.$store.dispatch('storeQuestionnaire', {
        inputName: 'covid_sickness_date',
        inputValue: value,
      })

    }
  },
  created() {
    const storedQuestionnaire = JSON.parse(localStorage.getItem('questionnaire'));

    this.hadCovid = storedQuestionnaire.had_covid || '';
    this.hadAntibodyTest = storedQuestionnaire.had_antibody_test || '';
    this.antibodiesTestDate = storedQuestionnaire.antibodies ? storedQuestionnaire.antibodies.test_date : '';
    this.numberOfAntibodies = storedQuestionnaire.antibodies ? storedQuestionnaire.antibodies.number : '';
    this.covidSicknessDate = storedQuestionnaire.covid_sickness_date || '';
  }
}
</script>