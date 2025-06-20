<template>
    <div
        class="w-full border-b-[1px] border-gray-200 pb-12  h-fit flex flex-col items-start pt-[100px] justify-start">
        <h3
            class="text-3xl font-bold text-gray-800 dark:text-white mb-8">
            About Me
        </h3>
        <p
            class="text-gray-700 dark:text-white">
            Hi, I'm Outh Menghour, a passionate web developer specializing in building modern, user-friendly websites and web applications. With 1 year experience in both frontend and backend development, I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
        </p>
        <p
            class="mt-3 text-gray-700 dark:text-white">
            I love building websites that look great and work even better. I specialize in both the visual side (React, Vue.js, Angular, Nuxt js) and Backend PHP, Laravel. I've built everything from simple sites to more complex platforms. 
        </p>
        <div 
            class="w-full grid grid-cols-2 sm:grid-cols-2 h-[110vh] lg:h-[60vh] md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
            <div
                v-for="(img, idx) in profiles"
                :key="idx"
                class="w-full h-full bg-red-200 overflow-hidden">
                <img 
                    :src="img" 
                    alt="profile image"
                    class="w-full h-full object-cover" />
            </div>
        </div>
        <p
            class="mt-3 text-gray-700 dark:text-white">
            What excites me most is making the web a better, more useful place. I believe in clean code and making things easy for users. My goal is always to deliver solutions that are not just functional, but truly intuitive and enjoyable to use.
        </p>
        <p
            class="mt-3 text-gray-700 dark:text-white">
            My process is straightforward: I listen to your needs, then we build and refine together. It's all about clear communication and getting things done efficiently, ensuring the final product perfectly aligns with your vision.
        </p>
        <p
            class="mt-3 text-gray-700 dark:text-white">
            When I'm not coding, I'm usually exploring new parts of Phnom Penh, Running, Football, Movies, Enjoying a good cup of coffee, or diving into the latest tech trends.
        </p>
        <p
            class="mt-3 text-gray-700 dark:text-white">
            I'm ready for new projects! If you need a website built or improved, let's chat.
        </p>
        <ul 
            class="flex gap-6 mt-12 items-center">
            <li
                v-for="(item, idx) in social_media"
                class="w-fit h-fit">
                <ULink
                    :key="idx"
                    :to="item.to"
                    target="__blank"
                    active-class="text-black rounded-full after:w-full"
                    class="group relative uppercase text-[.9rem] group dark:after:bg-white after:left-0 flex rounded-full transition after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:w-0 group-hover:after:w-full"
                    inactive-class="hover:after:w-full">
                    <UIcon
                        :name="item.icon"
                        class="w-6 h-6 group-hover:-translate-y-1 transition"/>
                </ULink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { 
    MyImage1,
    MyImage2,
    MyImage3,
    MyImage4
} from '~/assets/images';

const profiles = [
    MyImage4,
    MyImage1,
    MyImage2,
    MyImage3
];
const social_media = [
    {
        icon: 'uil:facebook-f',
        to: 'https://web.facebook.com/hour.479235'
    },
    {
        icon: 'mingcute:instagram-line',
        to: 'https://www.instagram.com/ig.hour/'
    },
    {
        icon: 'mdi:telegram',
        to: 'https://t.me/OuthMenghour'
    },
    {
        icon: 'mdi:github',
        to: 'https://github.com/Voxodinson'
    },
];
</script>