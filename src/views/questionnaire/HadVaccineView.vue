<template>
    <div class="min-h-screen bg-main-background px-48 py-24 relative">
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
    </div>
</template>
<script setup>
import TheHeader from "@/components/shared/TheHeader.vue";
import HadVaccineForm from "@/components/had-vaccine/HadVaccineForm.vue";
</script>