<template>
    <div
        class="w-full h-[60vh] bg-gray-100 flex flex-col items-center gap-3 justify-center">
        <span
            class="px-4 py-1 rounded-full bg-gray-200">
            Get in touch
        </span>
        <p
            class="text-center">
            What’s next? Feel free to reach out to me if you're looking for <br> 
            a developer, have a query, or simply want to connect.
        </p>
        <div 
            class=" flex items-center gap-3 mt-6">
            <UIcon
                name="material-symbols-light:mail-outline"
                class="w-10 h-10"/>
            <ULink
                to="mailto:outh.menghour@gmail.com"
                class="text-xl hover:underline transition">
                Outh.menghour@gmail.com
            </ULink>
        </div>  
        <div 
            class=" flex items-center gap-3">
            <UIcon
                name="iconamoon:arrow-top-right-1-thin"
                class="w-10 h-10"/>
            <ULink
                to="tel:067961719"
                class="text-xl hover:underline transition">
                +885 67961719
            </ULink>
        </div>
        <div 
            class="flex flex-col items-center justify-center gap-3 mt-6">
            <p
                class="text-[.8rem] text-gray-400">
                You may also find me on these platforms!
            </p>
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
    <div 
        class="h-[6vh] flex items-center justify-center">
        <p
            class="text-[.8rem] text-gray-400">
            &copy; 2025 | 
            <span
                class=" text-black">
                Designed
            </span> 
            and 
            <span
                class=" text-black">
                coded
            </span> 
            with ❤️️ 
            <span
                class=" text-black">
                Outh Menghour
            </span>
        </p>
    </div>
</template>

<script setup lang="ts">

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
</script>