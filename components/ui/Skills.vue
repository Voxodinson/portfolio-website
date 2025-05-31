<template>
    <div
        class="py-12 w-full flex items-start justify-start flex-col">
        <h3 class="text-3xl font-bold text-gray-800 dark:text-white mt-24">
            Skills
        </h3>
        <div 
            class="w-full flex flex-wrap items-center justify-center mt-6 gap-y-6">
            <div 
                v-for="(skill, idx) in 20"
                class="min-w-[120px] w-[10%] h-[100px] flex items-center justify-center">
                <UIcon
                    name="vscode-icons:file-type-tailwind"
                    class="w-20 h-20"/>
                <h6
                    class="text-1xl">
                    Nuxt JS
                </h6>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>   