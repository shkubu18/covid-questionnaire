<template>
  <the-main>
    <the-header page="2/4"></the-header>
    <covid-condition-form></covid-condition-form>

    <img
        alt="boy with cap"
        class="absolute top-28 right-40 z-10"
        src="@/assets/images/covid-condition/background.png"
    />
    <transition
        appear
        enter-active-class="duration-300 ease-out"
        enter-from-class="scale-x-[2] translate-x-64 -translate-y-24"
    >
      <img
          v-if="showElement"
          alt="red circle"
          class="absolute top-370 right-800"
          src="@/assets/images/covid-condition/red-circle.png"
      />
    </transition>
  </the-main>
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import CovidConditionForm from "@/components/covid-condition/FormCovidCondition.vue";
import TheMain from "@/components/layouts/TheMain.vue";
import {mapGetters} from "vuex";

export default {
  components: {
    TheHeader,
    CovidConditionForm,
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