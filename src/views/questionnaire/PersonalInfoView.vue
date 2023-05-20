<template>
  <the-main>
    <the-header page="1/4"></the-header>
    <personal-info-form></personal-info-form>

    <hr class="border-black w-60 mb-4">
    <p class="text-gray-500 mt-12">*-ით მონიშნული ველების შევსება <br> სავალდებულოა</p>

    <img
        alt="boy and girl"
        class="absolute top-24 right-40 z-10"
        src="@/assets/images/personal-info/background.png"
    />
    <transition
        enter-active-class="duration-200 ease-in"
        enter-from-class="scale-x-[0.2] -translate-x-72 translate-y-3"
    >
      <img
          v-if="showElement"
          alt="yellow line"
          class="absolute top-325 right-80"
          src="@/assets/images/personal-info/yellow-line.png"
      />
    </transition>
  </the-main>
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import PersonalInfoForm from "@/components/personal-info/PersonalInfoForm.vue";
import TheMain from "@/components/shared/TheMain.vue";
import {mapGetters} from "vuex";

export default {
  components: {
    TheHeader,
    PersonalInfoForm,
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