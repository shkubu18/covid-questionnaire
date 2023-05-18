<template>
  <ValidationForm id="covid-condition-form" @submit="onSubmit">
    <div class="mb-12">
      <p class="text-2xl font-bold mb-6">გაქვს გადატანილი Covid-19?*</p>

      <div class="flex items-center pl-6 mb-6">
        <Field
            id="yes"
            v-model="hasCovid"
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
            v-model="hasCovid"
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
            v-model="hasCovid"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="had_covid"
            type="radio"
            value="have_it_now"
        />
        <label class="text-xl font-bold ml-4" for="have_it_now">ახლა მაქვს</label>
      </div>
    </div>
    <ErrorMessage class="pl-3.5 text-error-message-color" name="had_covid"/>

    <div v-if="hasCovid === 'yes'" class="mb-12">
      <p class="text-2xl font-bold mb-6">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>

      <div class="flex items-center pl-6 mb-6">
        <Field
            id="yes"
            v-model="hadAntibodyTest"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="had_antibody_test"
            rules="required"
            type="radio"
            value="yes"
        />
        <label class="text-xl font-bold ml-4" for="yes">კი</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="no"
            v-model="hadAntibodyTest"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="had_antibody_test"
            type="radio"
            value="no"
        />
        <label class="text-xl font-bold ml-4" for="no">არა</label>
      </div>
    </div>

    <div v-if="hadAntibodyTest === 'yes' && hasCovid === 'yes'">
      <p class="text-2xl font-bold mb-6">
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br> რიცხვი და ანტისხეულების რაოდენობა*
      </p>

      <div class="flex flex-col mb-10 w-1/3 pl-6">
        <Field
            v-model="antibodiesTestDate"
            class="p-3 bg-transparent border-2 border-gray-600 placeholder:text-gray-600 focus:outline-none"
            name="test_date"
            placeholder="რიცხვი"
            rules="date_format"
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

    <div v-if="hadAntibodyTest === 'no'  && hasCovid === 'yes'">
      <p class="text-2xl font-bold mb-6">მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br> როდის გქონდა Covid-19*
      </p>

      <div class="flex flex-col w-1/3 pl-6">
        <Field
            v-model="dateOfPossessionOfCovid"
            class="p-3 bg-transparent border-2 border-gray-600 placeholder:text-gray-600 focus:outline-none"
            name="date_of_possession_of_covid"
            placeholder="დდ/თთ/წწ"
            rules="required|date_format"
            type="text"
        />

        <ErrorMessage class="pl-3.5 mt-3 text-error-message-color" name="date_of_possession_of_covid"/>
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
      hasCovid: '',
      hadAntibodyTest: '',
      antibodiesTestDate: '',
      numberOfAntibodies: '',
      dateOfPossessionOfCovid: ''
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({name: 'questionnaire.had_vaccine.show'})
    }
  },
  watch: {
    hasCovid(value) {
      this.$store.dispatch('covidCondition/storeInputValue', {
        inputName: 'hasCovid',
        inputValue: value
      })
    },
    hadAntibodyTest(value) {
      this.$store.dispatch('covidCondition/storeInputValue', {
        inputName: 'hadAntibodyTest',
        inputValue: value
      })
    },
    antibodiesTestDate(value) {
      this.$store.dispatch('covidCondition/storeInputValue', {
        inputName: 'antibodiesTestDate',
        inputValue: value
      })
    },
    numberOfAntibodies(value) {
      this.$store.dispatch('covidCondition/storeInputValue', {
        inputName: 'numberOfAntibodies',
        inputValue: value
      })
    },
    dateOfPossessionOfCovid(value) {
      this.$store.dispatch('covidCondition/storeInputValue', {
        inputName: 'dateOfPossessionOfCovid',
        inputValue: value
      })
    }
  },
  created() {
    const inputs = ['hasCovid', 'hadAntibodyTest', 'antibodiesTestDate', 'numberOfAntibodies', 'dateOfPossessionOfCovid'];

    inputs.forEach((input) => {
      const storedValue = localStorage.getItem(input);

      if (storedValue) {
        this[input] = storedValue;
      }
    });
  }
}
</script>