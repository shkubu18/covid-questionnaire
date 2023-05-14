<template>
    <div class="min-h-screen bg-main-background px-48 py-24 relative">
        <the-header page="2/4"></the-header>
        <covid-condition-form></covid-condition-form>

        <img
                alt="boy with cap"
                class="absolute top-28 right-40 z-10"
                src="@/assets/images/covid-condition/background.png"
        />
        <img
                alt="red circle"
                class="absolute top-370 right-800"
                src="@/assets/images/covid-condition/red-circle.png"
        />
    </div>

</template>
<script setup>
import TheHeader from "@/components/shared/TheHeader.vue";
import CovidConditionForm from "@/components/covid-condition/CovidConditionForm.vue";
</script>