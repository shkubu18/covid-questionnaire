<template>
  <ValidationForm @submit="onSubmit">
    <div class="mb-12">
      <p class="text-2xl font-bold mb-6">
        რა სიხშირით შეიძლება გვქონდეს საერთო <br> არაფორმალური ონლაინ შეხვედრები, სადაც ყველა <br> სურვილისამებრ
        ჩაერთვება?*
      </p>

      <input-radio
          id="twice_a_week"
          v-model="nonFormalMeetings"
          label="კვირაში ორჯერ"
          name="non_formal_meetings"
          rules="required"
          value="twice_a_week"
      />
      <input-radio
          id="once_a_week"
          v-model="nonFormalMeetings"
          label="კვირაში ერთხელ"
          name="non_formal_meetings"
          rules="required"
          value="once_a_week"
      />
      <input-radio
          id="once_in_a_two_weeks"
          v-model="nonFormalMeetings"
          label="ორ კვირაში ერთხელ"
          name="non_formal_meetings"
          rules="required"
          value="once_in_a_two_weeks"
      />
      <input-radio
          id="once_in_a_month"
          v-model="nonFormalMeetings"
          label="თვეში ერთხელ"
          name="non_formal_meetings"
          rules="required"
          show-error="yes"
          value="once_in_a_month"
      />
    </div>

    <div class="mb-12">
      <p class="text-2xl font-bold mb-6">
        კვირაში რამდენი დღე ისურვებდი ოფისიდან <br> მუშაობას?*
      </p>

      <input-radio
          id="0"
          v-model="numberOfDaysFromOffice"
          label="0"
          name="number_of_days_from_office"
          rules="required"
          value="0"
      />
      <input-radio
          id="1"
          v-model="numberOfDaysFromOffice"
          label="1"
          name="number_of_days_from_office"
          rules="required"
          value="1"
      />
      <input-radio
          id="2"
          v-model="numberOfDaysFromOffice"
          label="2"
          name="number_of_days_from_office"
          rules="required"
          value="2"
      />
      <input-radio
          id="3"
          v-model="numberOfDaysFromOffice"
          label="3"
          name="number_of_days_from_office"
          rules="required"
          value="3"
      />
      <input-radio
          id="4"
          v-model="numberOfDaysFromOffice"
          label="4"
          name="number_of_days_from_office"
          rules="required"
          value="4"
      />
      <input-radio
          id="5"
          v-model="numberOfDaysFromOffice"
          label="5"
          name="number_of_days_from_office"
          rules="required"
          show-error="yes"
          value="5"
      />
    </div>

    <div class="w-textarea-width">
      <input-text-area
          v-model="whatAboutMeetingsInLive"
          label="რას ფიქრობ ფიზიკურ შეკრებებზე?"
          name="what_about_meetings_in_live"
      />
      <input-text-area
          v-model="tellUsYourOpinionAboutUs"
          label="რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?"
          name="tell_us_your_opinion_about_us"
      />

      <input-submit/>

      <router-link :to="{name: 'questionnaire.had_vaccine.show'}" class="absolute right-1/2 bottom-28">
        <icon-arrow-left></icon-arrow-left>
      </router-link>
    </div>
  </ValidationForm>
</template>


<script>
import {Form as ValidationForm} from "vee-validate";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
import {saveQuestionnaire} from "@/services/api/questionnaire";
import axios from "@/config/axios/axios";
import {mapGetters} from "vuex";
import InputRadio from "@/components/shared/inputs/InputRadio.vue";
import InputTextArea from "@/components/shared/inputs/InputTextArea.vue";
import InputSubmit from "@/components/ui/InputSubmit.vue";


export default {
  components: {
    InputSubmit,
    InputTextArea,
    InputRadio,
    IconArrowLeft,
    ValidationForm,
  },
  data() {
    return {
      nonFormalMeetings: '',
      numberOfDaysFromOffice: '',
      whatAboutMeetingsInLive: '',
      tellUsYourOpinionAboutUs: ''
    }
  },
  methods: {
    onSubmit() {
      saveQuestionnaire(this.questionnaire).then((response) => {
        if (response.status === 201) {
          this.$router.push({name: 'thank_you.show'})
          localStorage.clear()
        }
      });
    }
  },
  computed: {
    ...mapGetters(['questionnaire'])
  },
  watch: {
    nonFormalMeetings(value) {
      this.$store.dispatch('storeQuestionnaire', {
        inputName: 'non_formal_meetings',
        inputValue: value
      })
    },
    numberOfDaysFromOffice(value) {
      this.$store.dispatch('storeQuestionnaire', {
        inputName: 'number_of_days_from_office',
        inputValue: value
      })
    },
    whatAboutMeetingsInLive(value) {
      this.$store.dispatch('storeQuestionnaire', {
        inputName: 'what_about_meetings_in_live',
        inputValue: value
      })
    },
    tellUsYourOpinionAboutUs(value) {
      this.$store.dispatch('storeQuestionnaire', {
        inputName: 'tell_us_your_opinion_about_us',
        inputValue: value
      })
    }
  },
  created() {
    const storedQuestionnaire = JSON.parse(localStorage.getItem('questionnaire'));

    this.nonFormalMeetings = storedQuestionnaire.non_formal_meetings || '';
    this.numberOfDaysFromOffice = storedQuestionnaire.number_of_days_from_office || '';
    this.whatAboutMeetingsInLive = storedQuestionnaire.what_about_meetings_in_live || '';
    this.tellUsYourOpinionAboutUs = storedQuestionnaire.tell_us_your_opinion_about_us || '';
  }
}
</script>