<template>
    <the-main>
        <the-header page="3/4"></the-header>
        <had-vaccine-form></had-vaccine-form>

        <img
                alt="doctor"
                class="absolute top-48 right-40 z-10"
                src="@/assets/images/had-vaccine/background.png"
        />
        <img
                alt="star"
                class="absolute top-44 right-[620px]"
                src="@/assets/images/had-vaccine/star.png"
        />
    </the-main>
</template>
<script setup>
import TheHeader from "@/components/shared/TheHeader.vue";
import HadVaccineForm from "@/components/had-vaccine/HadVaccineForm.vue";
import TheMain from "@/components/shared/TheMain.vue";
</script>