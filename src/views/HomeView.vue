<template>
    <div class="h-screen flex items-center justify-center flex-col bg-home-background">
        <icon-redberry class="w-logo-width"/>
        <router-link class="mt-20 px-20 pb-20 hover:text-shadow" to="kitkhvari/piradi-informacia">
            <h1 class="ml-3 text-center font-bold text-3xl">კითხვარის <br/> დაწყება</h1>
        </router-link>
    </div>
</template>

<script setup>
import IconRedberry from "@/components/icons/IconRedberry.vue";
</script>