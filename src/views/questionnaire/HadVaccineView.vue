<template>
  <the-main>
    <the-header page="3/4"></the-header>
    <had-vaccine-form></had-vaccine-form>

    <img
        alt="doctor"
        class="absolute top-48 right-40 z-10"
        src="@/assets/images/had-vaccine/background.png"
    />
    <transition
        appear
        enter-active-class="duration-300 ease-out"
        enter-from-class="-translate-x-20 translate-y-24"
    >
      <img
          v-if="showElement"
          alt="star"
          class="absolute top-44 right-[620px]"
          src="@/assets/images/had-vaccine/star.png"
      />
    </transition>
  </the-main>
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import HadVaccineForm from "@/components/had-vaccine/FormHadVaccine.vue";
import TheMain from "@/components/shared/TheMain.vue";
import {mapGetters} from "vuex";

export default {
  components: {
    TheHeader,
    HadVaccineForm,
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