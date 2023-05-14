<template>
    <header class="flex justify-between items-center border-b-2 border-black pb-2.5 mb-10">
        <icon-redberry-logo></icon-redberry-logo>
        <span class="text-4xl">{{ page }}</span>
    </header>
</template>

<script>
import IconRedberryLogo from "@/components/icons/header/IconRedberryLogo.vue";

export default {
    components: {IconRedberryLogo},
    props: {
        page: {
            type: String,
            required: true
        }
    }
}
</script>