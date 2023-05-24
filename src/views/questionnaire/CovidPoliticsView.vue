<template>
  <the-main>
    <the-header page="4/4"></the-header>

    <p class="text-2xl w-heading-text mb-12">
      რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც ჩვენი
      თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი,
      ბევრისთვის კი — ჩვენთან გადმოსვლის.<br> <br> პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
      ყოველდღიური კომუნიკაციაც გაიშვიათდა.
    </p>

    <covid-politics-form></covid-politics-form>

    <img
        alt="boy with a bicycle"
        class="absolute top-56 right-40 z-10"
        src="@/assets/images/covid-politics/background.png"
    />
    <transition
        appear
        enter-active-class="duration-500 ease-in-out"
        enter-from-class="scale-150 -translate-x-10 -translate-y-6"
    >
      <img
          v-if="showElement"
          alt="red heart"
          class="absolute top-280 right-575"
          src="@/assets/images/covid-politics/red-heart.png"
      />
    </transition>
  </the-main>
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import CovidPoliticsForm from "@/components/covid-politics/FormCovidPolitics.vue";
import TheMain from "@/components/shared/TheMain.vue";
import {mapGetters} from "vuex";

export default {
  components: {
    TheHeader,
    CovidPoliticsForm,
    TheMain
  },
  mounted() {
    this.$store.dispatch('setShowElement')
  },
  computed: {
    ...mapGetters(["showElement"])
  },
}
</script>