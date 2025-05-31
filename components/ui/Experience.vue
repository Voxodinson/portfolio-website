<template>
    <div
        class="w-full">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-8">Education</h2>
        <div 
            class="space-y-6">
            <div 
                v-for="(edu, idx) in educations"
                :key="idx"
                class="border-l-4 pl-4"
                :class="edu.color">
                <h3 
                    class="text-xl font-semibold text-gray-800 dark:text-white">
                    {{ edu.title }}
                </h3>
                <p 
                    class="text-gray-600 dark:text-gray-300">
                    {{ edu.school }}
                </p>
                <span 
                    class="text-sm text-gray-400">
                    {{ edu.year }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const educations = [
    {
        title: 'Bachelor of Computer Science (G-25)',
        school: 'Angkor High School',
        year: '2022-2025',
        color: 'border-[#5409DA]'
    },
    {
        title: 'High School',
        school: 'Angkor High School',
        year: '2019-2021',
        color: 'border-[#4E71FF]'
    },
    {
        title: 'Secondary School',
        school: 'Angkor High School',
        year: '2017-2019',
        color: 'border-[#00CAFF]'
    }
]
</script>