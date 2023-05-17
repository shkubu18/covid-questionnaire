<template>
    <transition
            enter-active-class="duration-300 ease-in"
            enter-from-class="opacity-0"
    >
        <div v-if="showElement" class="min-h-screen flex items-center justify-center bg-thanks-page-background">
            <div class="relative">
                <transition
                        enter-active-class="duration-100 ease-out"
                        enter-from-class="translate-x-6 translate-y-10"
                >
                    <icon-bigger-star v-if="showStars" class="ml-6 -top-14 absolute"></icon-bigger-star>
                </transition>

                <transition
                        enter-active-class="duration-1000 ease-in"
                        enter-from-class="opacity-0"
                >
                    <h1 v-show="showText" class="text-white text-6xl font-bold tracking-widest mt-5 my-3">
                        მადლობა
                    </h1>
                </transition>

                <div class="flex justify-end relative">
                    <transition
                            enter-active-class="duration-100 ease-out"
                            enter-from-class="-translate-x-10 -translate-y-6"
                    >
                        <icon-smaller-star v-show="showStars" class="mr-8 absolute"></icon-smaller-star>
                    </transition>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import IconBiggerStar from "@/components/icons/IconBiggerStar.vue";
import IconSmallerStar from "@/components/icons/IconSmallerStar.vue";
import {mapGetters} from "vuex";

export default {
    components: {
        IconBiggerStar,
        IconSmallerStar
    },
    data() {
        return {
            showText: false,
            showStars: false
        }
    },
    mounted() {
        this.$store.dispatch('setShowElement')

        setTimeout(() => {
            this.showText = true
        }, 500)

        setTimeout(() => {
            this.showStars = true
        }, 1500)
    },
    computed: {
        ...mapGetters(["showElement"])
    },
}
</script>