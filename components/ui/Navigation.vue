<template>
    <div
        class="w-full flex items-center justify-between h-[100px]">
        <h1
            class=" text-[1.5rem] uppercase font-thin font-anton tracking-wider">
            Outh Menghour
        </h1>
        <div 
            class="hidden lg:flex">
            <ul 
                class="flex gap-6">
                <li
                    v-for="(item, idx) in link_items"
                    class="w-fit h-fit">
                   <ULink
                        :key="idx"
                        :to="item.to"
                        active-class="text-black rounded-full after:w-full"
                        class="group relative uppercase text-[.9rem] after:left-0 flex group rounded-full transition after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:w-0 group-hover:after:w-full"
                        inactive-class="hover:after:w-full">
                        <span
                            class="group-hover:-translate-y-1 font-semibold transition">
                            {{ item.label }}
                        </span>
                    </ULink>
                </li>
            </ul>
        </div>
        <div 
            class="hidden lg:flex">
            <ul 
                class="flex gap-6">
                <li
                    v-for="(item, idx) in social_media"
                    class="w-fit h-fit">
                    <ULink
                        :key="idx"
                        :to="item.to"
                        active-class="text-black rounded-full after:w-full"
                        class="group relative uppercase text-[.9rem] group after:left-0 pb-1 flex rounded-full transition after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:w-0 group-hover:after:w-full"
                        inactive-class="hover:after:w-full">
                        <UIcon
                            :name="item.icon"
                            class="w-6 h-6 group-hover:-translate-y-1 transition"/>
                    </ULink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

/**
 * Beign Declare variable
 */
const link_items = [
    {
        label: 'home',
        to: '/'
    },
    {
        label: 'about me',
        to: '/about'
    },
    {
        label: 'portfolio',
        to: '/portfolio'
    },
    {
        label: 'contact',
        to: '/contact'
    },
];

const social_media = [
    {
        icon: 'uil:facebook-f',
        to: ''
    },
    {
        icon: 'mingcute:instagram-line',
        to: ''
    },
    {
        icon: 'hugeicons:new-twitter',
        to: ''
    },
    {
        icon: 'mdi:telegram',
        to: ''
    },
]
/**
 * End Declare variable
 */
</script>