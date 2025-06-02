<template>
    <div
        class="w-full pt-[100px]">
        <h2 
            class="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            Professional Experience
        </h2>
        <div 
            class="space-y-6">
            <div 
                v-for="(exp, idx) in experiences" 
                :key="idx"
                class="w-full flex p-6 flex-col border-b-[1px] border-gray-200 shadow-md rounded-md">
                <div 
                    class="flex flex-col lg:flex-row justify-between">
                    <h3 
                        class="text-1xl font-semibold text-gray-800 dark:text-white">
                        {{ exp.title }}
                    </h3>
                    <span
                        class="text-gray-400 text-[.9rem]">
                        {{ exp.date }}
                    </span>
                </div>
                <p 
                    class="text-gray-600 dark:text-gray-300 border-b-[1px] border-gray-200 pb-3">
                    {{ exp.position }} - {{ exp.at }}
                </p>
                <p
                    class="text-gray-600 text-md mt-3">
                    {{ exp.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const experiences = [
    {
        title: 'Frontend Developer',
        position: 'Frontend Developer',
        at: 'Gtech Cambodia',
        description: 'Frontend developers craft user interfaces and experiences for web applications using a modern stack including Nuxt 3 for framework structure, TypeScript for enhanced code quality, and Tailwind CSS for rapid, responsive styling. They ensure seamless user interaction, optimal performance, and accessibility while collaborating with designers and integrating with backend APIs.',
        date: '10-July-2024 - 05-March-2025'
    },
    {
        title: 'AI Training Object Detection Modeling',
        position: 'Teams Lead',
        at: 'Gtech Cambodia',
        description: 'AI training object detection models is the process of teaching an artificial intelligence system to identify and locate specific objects within images or videos. Unlike simple image classification (which just tells you what is in an image), object detection goes a step further by also determining where those objects are, usually by drawing a bounding box around each detected object and assigning it a label.',
        date: '10-July-2024 - 05-March-2025'
    }
]
</script>