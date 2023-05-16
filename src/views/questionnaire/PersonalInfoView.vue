<template>
    <the-main>
        <the-header page="1/4"></the-header>
        <personal-info-form></personal-info-form>

        <hr class="border-black w-60 mb-4">
        <p class="text-gray-500">*-ით მონიშნული ველების შევსება <br> სავალდებულოა</p>

        <img
                alt="boy and girl"
                class="absolute top-24 right-40 z-10"
                src="@/assets/images/personal-info/background.png"
        />
        <img
                alt="yellow line"
                class="absolute top-325 right-80"
                src="@/assets/images/personal-info/yellow-line.png"
        />
    </the-main>
</template>
<script setup>
import TheHeader from "@/components/shared/TheHeader.vue";
import PersonalInfoForm from "@/components/personal-info/PersonalInfoForm.vue";
import TheMain from "@/components/shared/TheMain.vue";
</script>