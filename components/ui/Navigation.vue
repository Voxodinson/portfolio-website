<template>
    <div
        class="w-[90%] flex items-center justify-between h-[100px]">
        <h1
            class=" text-[1.5rem] uppercase font-thin font-anton tracking-wider">
            Outh Menghour
        </h1>
        <div 
            class="hidden lg:flex">
            <ul 
                class="flex gap-6 mt-1">
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
         <UDropdown
            class="lg:hidden flex"
            :items="itemsLinkDropdown"
            :popper="{ arrow: true }">
            <template #account="{ item }">
                <ULink
                    :to="item.to"
                    active-class="text-black"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                    {{ item.label }}
                </ULink>
            </template>
            <UButton
                color="white"
                size="sm"
                icon="iconamoon:menu-burger-horizontal-fill"
                class="border-none"/>    
        </UDropdown>
        <div 
            class="hidden lg:flex">
            <ul 
                class="flex gap-6 items-center">
                <li
                    v-for="(item, idx) in social_media"
                    class="w-fit h-fit">
                    <ULink
                        :key="idx"
                        :to="item.to"
                        active-class="text-black rounded-full after:w-full"
                        class="group relative uppercase text-[.9rem] group after:left-0 flex rounded-full transition after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:w-0 group-hover:after:w-full"
                        inactive-class="hover:after:w-full">
                        <UIcon
                            :name="item.icon"
                            class="w-6 h-6 group-hover:-translate-y-1 transition"/>
                    </ULink>
                </li>
                <li class="border-l-[1px] border-gray-300 h-[20px]"></li>
                <li>
                    <UIcon  
                        name="line-md:moon-to-sunny-outline-loop-transition"
                        class="w-6 h-6 mt-1 cursor-pointer hover:scale-110 transition"/>
                </li>
                <li
                    class="">
                    <a
                        href="../../files/pdf/CV.pdf"
                        target="_blank"
                        class="py-2 px-4 text-white rounded-md bg-black">
                        Download CV
                    </a>
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
        label: 'portfolio',
        to: '/portfolio'
    },
    {
        label: 'contact',
        to: '/contact'
    }
];

const itemsLinkDropdown = [
    [
        {
            label: 'Home',
            to: '/',
            icon: 'material-symbols:home'
        }
    ], 
    [
        {
            label: 'Shop',
            icon: 'material-symbols:shopping-bag-outline',
            to: '/products/product',
        },
        {
            label: 'Travel',
            icon: 'ic:round-travel-explore',
            to: '/travels/travel',
        }
    ], 
    [
        {
            label: 'About',
            icon: 'ix:about',
            to: '/about',
        }
    ]
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