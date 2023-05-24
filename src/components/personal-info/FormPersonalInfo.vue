<template>
  <ValidationForm id="personal-info-form" class="w-1/3" @submit="onSubmit">
    <input-text
        v-model="firstName"
        label="სახელი"
        name="first_name"
        placeholder="დათა"
        rules="required|min:3"
    />
    <input-text
        v-model="lastName"
        label="გვარი"
        name="last_name"
        placeholder="შკუბულიანი"
        rules="required|min:3"
    />
    <input-text
        v-model="email"
        label="მეილი"
        name="email"
        placeholder="fbi@redberry.ge"
        rules="required|email|redberry_email"
    />
  </ValidationForm>
  <button class="absolute right-1/2 bottom-28" form="personal-info-form">
    <icon-arrow-right/>
  </button>
</template>

<script>
import {Form as ValidationForm, Field, ErrorMessage} from "vee-validate";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import InputText from "@/components/ui/InputText.vue";

export default {
  components: {
    IconArrowRight,
    ValidationForm,
    Field,
    ErrorMessage,
    InputText
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: ''
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({name: 'questionnaire.covid_condition.show'})
    }
  },
  watch: {
    firstName(value) {
      this.$store.dispatch('storeQuestionnaire', {
        inputName: 'first_name',
        inputValue: value
      })
    },
    lastName(value) {
      this.$store.dispatch('storeQuestionnaire', {
        inputName: 'last_name',
        inputValue: value
      })
    },
    email(value) {
      this.$store.dispatch('storeQuestionnaire', {
        inputName: 'email',
        inputValue: value
      })
    },
  },
  created() {
    const storedQuestionnaire = JSON.parse(localStorage.getItem('questionnaire'));

    if (storedQuestionnaire) {
      this.firstName = storedQuestionnaire.first_name || '';
      this.lastName = storedQuestionnaire.last_name || '';
      this.email = storedQuestionnaire.email || '';
    }
  }
}
</script>