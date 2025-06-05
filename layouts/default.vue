<template>
    <div
        class="w-full h-fit flex bg-white dark:bg-gray-800  flex-col justify-center items-center">
        <div 
            class="w-[90%] items-center justify-center bg-white dark:bg-[#222831] flex sticky top-0 z-30 transition duration-300"
            :class="{
                '-translate-y-full': !isVisible
            }">
            <Navigation/>
        </div>
        <div 
            class="w-[90%] flex items-center justify-center">
            <NuxtPage/>
        </div>
        <Footer/>
    </div>
</template>

<script setup lang="ts">
import { 
    Navigation,
    Footer 
} from '~/components/ui';


/**
 * Begin::Declare variable section
 */
const isVisible: Ref<boolean> = ref<boolean>(true);
let lastScrollY = 0;
/**
 * End::Declare variable section
 */

/**
 * Begin::Some Logical section
 */
const isScrolled = ref(false)

const handleScroll = () => {
    const currentScrollY = window.scrollY
    isVisible.value = currentScrollY < lastScrollY || currentScrollY < 10
    isScrolled.value = currentScrollY > 10
    lastScrollY = currentScrollY
}
/**
 * End::Some Logical section
 */

onMounted(() => {
   window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>