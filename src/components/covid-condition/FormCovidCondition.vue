<template>
  <ValidationForm id="covid-condition-form" @submit="onSubmit">
    <div class="mb-12">
      <p class="text-2xl font-bold mb-6">გაქვს გადატანილი Covid-19?*</p>

      <input-radio
          id="yes"
          v-model="hadCovid"
          label="კი"
          name="had_covid"
          rules="required"
          value="yes"
      />
      <input-radio
          id="no"
          v-model="hadCovid"
          label="არა"
          name="had_covid"
          rules="required"
          value="no"
          @click="clearInput(['hadAntibodyTest', 'covidSicknessDate', 'antibodiesTestDate', 'numberOfAntibodies'], ['had_antibody_test', 'covid_sickness_date', 'antibodies'])"
      />
      <input-radio
          id="have_right_now"
          v-model="hadCovid"
          label="ახლა მაქვს"
          name="had_covid"
          rules="required"
          show-error="yes"
          value="have_right_now"
          @click="clearInput(['hadAntibodyTest', 'covidSicknessDate', 'antibodiesTestDate', 'numberOfAntibodies'], ['had_antibody_test', 'covid_sickness_date', 'antibodies'])"
      />
    </div>

    <div v-if="hadCovid === 'yes'" class="mb-12">
      <p class="text-2xl font-bold mb-6">ანტისხეულების ტესტი გაქვს გაკეთებული?*</p>

      <input-radio
          id="had_antibody_test_yes"
          v-model="hadAntibodyTest"
          label="კი"
          name="had_antibody_test"
          rules="required"
          value="yes"
          @click="clearInput(['covidSicknessDate'], ['covid_sickness_date'])"
      />
      <input-radio
          id="had_antibody_test_no"
          v-model="hadAntibodyTest"
          label="არა"
          name="had_antibody_test"
          rules="required"
          show-error="yes"
          value="no"
          @click="clearInput(['antibodiesTestDate', 'numberOfAntibodies'], ['antibodies'])"
      />
    </div>

    <div v-if="hadAntibodyTest === 'yes' && hadCovid === 'yes'">
      <p class="text-2xl font-bold mb-6">
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br> რიცხვი და ანტისხეულების რაოდენობა*
      </p>

      <div class="flex flex-col mb-10 w-1/3 pl-6">
        <input-text
            v-model="antibodiesTestDate"
            name="test_date"
            placeholder="რიცხვი"
            rules="antibodies_date_format"
        />
        <input-text
            v-model="numberOfAntibodies"
            name="number"
            placeholder="ანტისხეულების რაოდენობა"
            rules="integer"
        />
      </div>
    </div>

    <div v-if="hadAntibodyTest === 'no'  && hadCovid === 'yes'">
      <p class="text-2xl font-bold mb-6">
        მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br> როდის გქონდა Covid-19*
      </p>

      <div class="flex flex-col w-1/3 pl-6">
        <input-text
            v-model="covidSicknessDate"
            name="covid_sickness_date"
            placeholder="დდ/თთ/წწ"
            rules="required|date_format"
        />
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
import {Form as ValidationForm} from "vee-validate";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
import InputRadio from "@/components/ui/InputRadio.vue";
import InputText from "@/components/ui/InputText.vue";

export default {
  components: {
    InputText,
    InputRadio,
    IconArrowLeft,
    IconArrowRight,
    ValidationForm,
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

    this.hadCovid = storedQuestionnaire.had_covid;
    this.hadAntibodyTest = storedQuestionnaire.had_antibody_test || '';
    this.antibodiesTestDate = storedQuestionnaire.antibodies ? storedQuestionnaire.antibodies.test_date : '';
    this.numberOfAntibodies = storedQuestionnaire.antibodies ? storedQuestionnaire.antibodies.number : '';
    this.covidSicknessDate = storedQuestionnaire.covid_sickness_date || '';
  }
}
</script>