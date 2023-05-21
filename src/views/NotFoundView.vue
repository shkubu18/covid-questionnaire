<template>
  <the-main>
    <div class="flex items-center flex-col">
      <h1 class="text-5xl m-auto">სამწუხაროდ გვერდი ვერ მოიძებნა!</h1>
      <router-link :to="{name: 'home'}" class="text-4xl mt-10 text-blue-600">
        👉 <span class="underline">მთავარი გვერდი</span>
      </router-link>
    </div>
  </the-main>
</template>
<script setup>
import TheMain from "@/components/shared/TheMain.vue";
</script>