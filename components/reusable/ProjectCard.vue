<template>
    <div
        v-for="(p, idx) in data"
        :key="idx"
        class="w-full h-fit overflow-hidden">
        <div 
            class="w-full h-[300px] shadow-sm overflow-hidden rounded-md group relative">
            <img 
                :src="p.img" 
                alt="img"
                class="w-full h-full object-cover">
            <ULink 
                to="#"
                class="hidden group-hover:flex cursor-pointer bg-white bg-opacity-45 items-center justify-center transition w-full h-full absolute top-0 left-0">
                <div
                    class="w-[70px] h-[70px] flex justify-center items-center rounded-full bg-gray-700">
                    <UIcon
                        name="iconamoon:arrow-top-right-1"
                        class="w-12 h-12 text-white"/>
                </div>
            </ULink>
        </div>
        <h3
            class="my-2 font-semibold text-gray-800 text-wrap">
            {{ p.title }}
        </h3>
        <p
            class="text-gray-400 text-[.8rem] line-clamp-2 overflow-hidden text-ellipsis w-full">
            {{ p.detail }}
        </p>
    </div>
</template>

<script setup lang="ts">
/**
* Begin::Set event trigger to parent component
*/
const route = useRoute();
withDefaults(defineProps<{
    data: any,
}>(),{
    data: () => []
});
/**
* End::Set event trigger to parent component
*/
</script>

<style scoped>

</style>