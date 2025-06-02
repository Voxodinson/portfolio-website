<template>
    <div
        class="w-full gap-12 pt-[100px]">
        <div 
            class="w-full">
            <h3 class="text-3xl font-bold text-gray-800 dark:text-white mt-24">
                My Work Process
            </h3>
            <p
                class="text-gray-600 mt-3">
                My approach to web development is a structured and collaborative journey, designed to transform your ideas into impactful digital realities. I believe in clear communication and a systematic workflow that ensures transparency and delivers high-quality results.
            </p>
        </div>
        <div
            class="w-full h-fit mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">  
            <div
                v-for="(p, idx) in process"
                :key="idx"
                class="border-b-[1px] border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start gap-4">  
                <div
                    class="w-16 h-16 bg-purple-100 rounded-md flex items-center justify-center">  
                    <UIcon
                        :name="p.icon"
                        class="w-8 h-8 text-purple-500"/>  
                </div>
                <h3
                    class="font-semibold text-lg capitalize">  {{ p.title }}
                </h3>
                <p
                    class="text-sm text-gray-700">  {{ p.detail }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const process = [
    {
        title: 'Planning & Requirements',
        icon: 'fa-tasks',
        detail: 'Detailed planning and gathering of project requirements. Defining scope, goals, user flows, wireframes, and technical specifications.',
    },
    {
        title: 'Design & Prototyping',
        icon: 'fa-paint-brush',
        detail: 'Creating the visual design (UI) and user experience (UX). Developing mockups and interactive prototypes to visualize the final product.',
    },
    {
        title: 'Development & Implementation',
        icon: 'fa-code',
        detail: 'Building the website or application. Front-end development (HTML, CSS, JavaScript) and back-end development (server-side logic, database).',
    },
    {
        title: 'Testing & Deployment',
        icon: 'fa-rocket',
        detail: 'Thorough testing to ensure quality and functionality. Deploying the application to a server and making it accessible to users.',
    },
];
</script>