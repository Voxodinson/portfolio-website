<template>
    <div
        class="w-full">
        <div
            class="w-full flex min-h-[90vh] flex-col items-start justify-center relative overflow-hidden">
            <div class="absolute inset-0 z-10 bg-black/50"></div>
            <div
                class="absolute flex items-start justify-end flex-col inset-0 z-10 p-3 md:p-6">
                <span
                    class="flex items-center gap-3 text-sm md:text-base lg:text-lg py-2 px-4 rounded-full bg-gray-100 text-black">
                    <UIcon
                        name="svg-spinners:blocks-scale"
                        class="w-4 h-4 text-black"/>
                    Portfolio
                </span>
                <h1
                    class="text-start mt-4 md:mt-6 lg:mt-8 text-2xl md:text-3xl lg:text-5xl uppercase font-semibold text-white">
                    Outh Menghour
                </h1>
                <p
                    class="text-md text-white uppercase font-bold">
                    Web Developer
                </p>
            </div>
            <picture>
                <source 
                    media="(max-width: 430px)" 
                    :srcset="AtAngkorWat">
                <img
                    :src="ImageAtAngkorWat"
                    alt="image"
                    class="w-full min-h-[100vh] object-cover absolute inset-0">
            </picture>
        </div>

        <div 
            class="w-full flex items-center justify-center flex-col gap-3 mt-12">
            <h3
                class=" uppercase text-gray-400">biography</h3>
            <p
                class="text-xl text-center">
                Work for money and design for love! <br> I’m 
                <span class=" font-semibold">
                    Outh Menghour
                </span> 
                an 
                <span class=" font-semibold">
                    Web Development
                </span> 
                based in Cambodia.
            </p>
        </div>
        <About/>
        <Education/>
        <Experience/>
        <div
            class="w-full flex flex-col items-start justify-start pt-[100px]">
            <h3 
                class="text-3xl mt-6 font-bold text-gray-800 dark:text-white mb-8">
                Latest Works
            </h3>
            <div 
                class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <ProjectCard
                    :data="projects"/>
            </div>
            <div 
                class="w-full flex items-center justify-center">
                <ULink
                    to=""
                    class="flex items-center gap-3 text-[1.2rem] underline mt-12">
                    See more
                    <UIcon
                        name="iconamoon:arrow-right-1"
                        class="w-6 h-6"/>
                </ULink>
            </div>
        </div>
        <Skills/>
        <div 
            class="w-full flex items-center justify-center flex-col py-[200px]">
            <h3
                class="text-[1.5rem] text-center">
                Got a Vision? Let's Bring It to Life!
            </h3>
            <p
                class="text-gray-700 dark:text-white text-center">
                I'm always excited to collaborate on new and innovative projects. Whether you're starting from scratch or refining an existing idea
            </p>
            <ULink
                to="tel:067961719"
                class="flex items-center gap-3 text-[1.2rem] underline mt-12">
                Call me now
                <UIcon
                    name="material-symbols:phone-forwarded"
                    class="w-6 h-6"/>
            </ULink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { 
    AtAngkorWat,
    ImageAtAngkorWat
} from '~/assets/images';
import { 
    ProjectCard 
} from '~/components/reusable';
import {
    Experience,
    Education,
    Skills,
    About
} from '~/components/ui';
definePageMeta({
    colorMode: 'light'
});

const projects = [
    {
        id: 1,
        title: 'JS Express Delivery Admin',
        detail: 'This strongly suggests that the application is a web-based administrative interface for managing an express delivery service.',
        img: 'https://cdn.dribbble.com/userupload/16072864/file/original-75fa6cf2feb9be53365f225615c3aecd.png?resize=400x0',
    },
    {
        id: 2,
        title: 'Agriculture POS',
        detail: 'An Agriculture POS (Point of Sale) System is a specialized software solution designed to streamline sales, inventory, and customer management for agricultural input suppliers and farm product retailers. It enables businesses to efficiently manage the sale of seeds, fertilizers, pesticides, tools, and farming equipment while tracking stock levels, purchase history, and vendor interactions in real time.',
        img: 'https://cdn.dribbble.com/userupload/13712952/file/original-ee27cd26da0958f7890ce0c8bfdb57e3.png?resize=1024x768&vertical=center',
        link: 'http://example.com/project1',
    },
    {
        id: 3,
        title: 'Online Examination Platform',
        detail: 'Tools for administrators or instructors to create exams, define questions, set time limits, and configure scoring.',
        img: 'https://examonline.in/wp-content/uploads/2021/11/blog1.png',
    }
]
</script>