<template>
    <h3 class="text-3xl font-bold text-gray-800 dark:text-white pt-[100px]">
        Education & Certifications
    </h3>
    <div
        class="w-[90%] py-6 grid grid-cols-1 md:grid-cols-2">
        <div 
            class="space-y-6">
            <h2 class="text-xl font-bold text-gray-800 dark:text-white mb-8">
                Education
            </h2>
            <div 
                v-for="(edu, idx) in educations"
                :key="idx"
                class="border-l-4 pl-4"
                :class="edu.color">
                <h3 
                    class="text-1xl font-semibold text-gray-800 dark:text-white">
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
        <div 
            class="space-y-6 mt-6 md:mt-0 w-full">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-8">
                Certifications
            </h3>
            <div 
                v-for="(cer, idx) in certifications"
                :key="idx"
                :class="cer.color"
                class="w-full flex items-center justify-between border-l-4 pl-4">
                <div 
                    class="w-fit">
                    <h3 
                        class="text-1xl font-semibold text-gray-800 dark:text-white">
                        {{ cer.title }}
                    </h3>
                    <p 
                        class="text-gray-600 dark:text-gray-300">
                        {{ cer.at }}
                    </p>
                    <span 
                        class="text-sm text-gray-400">
                        {{ cer.date }}
                    </span>
                </div>
                <a
                    :href="cer.to"
                    target="_blank"
                    class="group relative text-[.9rem] after:left-0 flex group rounded-full transition after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:w-0 group-hover:after:w-full">
                    <span
                        class="group-hover:-translate-y-1 transition">
                        View PDF
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const educations = [
    {
        title: 'Bachelor of Computer Science (G-25)',
        school: 'Royal University of Phnom Penh',
        year: '2022-2025',
        color: 'border-blue-600'
    },
    {
        title: 'High School',
        school: 'Angkor High School',
        year: '2019-2021',
        color: 'border-blue-500'
    },
    {
        title: 'Secondary School',
        school: 'Angkor High School',
        year: '2017-2019',
        color: 'border-blue-400'
    }
];

const certifications = [
    {
        title: 'Cloud Foundations',
        date: '02-12-2025',
        at: 'AWS Academy',
        color: 'border-blue-600',
        to: '../../files/pdf/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20250424-26-ov5tf3.pdf'
    },
    {
        title: 'Cloud Architecting',
        date: '04-24-2025',
        at: 'AWS Academy',
        color: 'border-blue-500',
        to: '../../files/pdf/AWS_Academy_Graduate___AWS_Academy_Cloud_Architecting_Badge20250424-28-t0jhg8.pdf'
    },
    {
        title: 'Data Engineering',
        date: '01-10-2025',
        at: 'AWS Academy',
        color: 'border-blue-400',
        to: '../../files/pdf/AWS_Academy_Graduate___AWS_Academy_Data_Engineering_Badge20250403-27-npkehw.pdf'
    },
    {
        title: 'Machine Learning',
        date: '02-26-2025',
        at: 'AWS Academy',
        color: 'border-blue-300',
        to: '../../files/pdf/AWS_Academy_Graduate___AWS_Academy_Machine_Learning_Foundations_Badge20250226-29-yv0zee.pdf'
    }
]
</script>