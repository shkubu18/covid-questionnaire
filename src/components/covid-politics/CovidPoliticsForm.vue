<template>
  <ValidationForm @submit="onSubmit">
    <div class="mb-12">
      <p class="text-2xl font-bold mb-6">
        რა სიხშირით შეიძლება გვქონდეს საერთო <br> არაფორმალური ონლაინ შეხვედრები, სადაც ყველა <br> სურვილისამებრ
        ჩაერთვება?*
      </p>

      <div class="flex items-center pl-6 mb-6">
        <Field
            id="twice_a_week"
            v-model="nonFormalMeetings"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="non_formal_meetings"
            rules="required"
            type="radio"
            value="twice_a_week"
        />
        <label class="text-xl font-bold ml-4" for="twice_a_week">კვირაში ორჯერ</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="once_a_week"
            v-model="nonFormalMeetings"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="non_formal_meetings"
            type="radio"
            value="once_a_week"
        />
        <label class="text-xl font-bold ml-4" for="once_a_week">კვირაში ერთხელ</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="once_in_a_two_weeks"
            v-model="nonFormalMeetings"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="non_formal_meetings"
            type="radio"
            value="once_in_a_two_weeks"
        />
        <label class="text-xl font-bold ml-4" for="once_in_a_two_weeks">ორ კვირაში ერთხელ</label>
      </div>
      <div class="flex items-center pl-6 mb-4">
        <Field
            id="once_in_a_month"
            v-model="nonFormalMeetings"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="non_formal_meetings"
            type="radio"
            value="once_in_a_month"
        />
        <label class="text-xl font-bold ml-4" for="once_in_a_month">თვეში ერთხელ</label>
      </div>

      <ErrorMessage class="pl-3.5 text-error-message-color" name="non_formal_meetings"/>
    </div>

    <div class="mb-12">
      <p class="text-2xl font-bold mb-6">
        კვირაში რამდენი დღე ისურვებდი ოფისიდან <br> მუშაობას?*
      </p>

      <div class="flex items-center pl-6 mb-6">
        <Field
            id="0"
            v-model="numberOfDaysFromOffice"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="number_of_days_from_office"
            rules="required"
            type="radio"
            value="0"
        />
        <label class="text-xl font-bold ml-4" for="0">0</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="1"
            v-model="numberOfDaysFromOffice"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="number_of_days_from_office"
            type="radio"
            value="1"
        />
        <label class="text-xl font-bold ml-4" for="1">1</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="2"
            v-model="numberOfDaysFromOffice"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="number_of_days_from_office"
            type="radio"
            value="2"
        />
        <label class="text-xl font-bold ml-4" for="2">2</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="3"
            v-model="numberOfDaysFromOffice"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="number_of_days_from_office"
            type="radio"
            value="3"
        />
        <label class="text-xl font-bold ml-4" for="3">3</label>
      </div>
      <div class="flex items-center pl-6 mb-6">
        <Field
            id="4"
            v-model="numberOfDaysFromOffice"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="number_of_days_from_office"
            type="radio"
            value="4"
        />
        <label class="text-xl font-bold ml-4" for="4">4</label>
      </div>
      <div class="flex items-center pl-6 mb-4">
        <Field
            id="5"
            v-model="numberOfDaysFromOffice"
            class="text-black focus:ring-0 h-6 w-6 accent-black"
            name="number_of_days_from_office"
            type="radio"
            value="5"
        />
        <label class="text-xl font-bold ml-4" for="5">5</label>
      </div>

      <ErrorMessage class="pl-3.5 text-error-message-color" name="number_of_days_from_office"/>
    </div>


    <div class="w-textarea-width">
      <div class="flex flex-col mb-12">
        <label class="text-2xl font-bold mb-6" for="what_about_meetings_in_live">
          რას ფიქრობ ფიზიკურ შეკრებებზე?
        </label>
        <Field
            id="what_about_meetings_in_live"
            v-model="whatAboutMeetingsInLive"
            as="textarea"
            class="border-2 border-gray-600 bg-transparent p-2 focus:outline-none text-xl"
            name="what_about_meetings_in_live"
            rows="6"
        >
        </Field>
      </div>
      <div class="flex flex-col">
        <label class="text-2xl font-bold mb-6" for="tell_us_your_opinion_about_us">
          რას ფიქრობ არსებულ გარემოზე: <br> რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?
        </label>
        <Field
            id="tell_us_your_opinion_about_us"
            v-model="tellUsYourOpinionAboutUs"
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

      <button class="absolute right-1/2 bottom-28" type="submit">
        <icon-arrow-left></icon-arrow-left>
      </button>
    </div>
  </ValidationForm>
</template>


<script>
import {Form as ValidationForm, Field, ErrorMessage} from "vee-validate";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
import {saveQuestionnaire} from "@/services/api/questionnaire";
import axios from "@/config/axios/axios";
import {mapGetters} from "vuex";


export default {
  components: {
    IconArrowLeft,
    ValidationForm,
    Field,
    ErrorMessage
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