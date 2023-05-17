<template>
    <div class="h-screen flex items-center justify-center flex-col bg-main-background">
        <transition
                enter-active-class="duration-700 ease-in"
                enter-from-class="transform scale-[27]"
                enter-to-class="scale-1"
        >
            <icon-redberry v-show="showLogo" class="w-logo-width"/>
        </transition
        >
        <router-link class="mt-20 px-20 pb-20 hover:text-shadow relative" to="kitkhvari/piradi-informacia">
            <transition
                    enter-active-class="duration-1000 ease-out"
                    enter-from-class="opacity-0 -translate-y-12"
                    enter-to-class="opacity-1 translate-y-0"
            >
                <h1 v-show="showHeading" class="absolute -left-2.5 ml-3 text-center font-bold text-3xl">
                    კითხვარის <br/> დაწყება
                </h1>
            </transition>
        </router-link>
    </div>
</template>

<script>
import IconRedberry from "@/components/icons/IconRedberry.vue";

export default {
    components: {
        IconRedberry,
    },
    data() {
        return {
            showLogo: false,
            showHeading: false
        }
    },
    mounted() {
        this.showLogo = true

        setTimeout(() => {
            this.showHeading = true
        }, 1200);
    }
}
</script>