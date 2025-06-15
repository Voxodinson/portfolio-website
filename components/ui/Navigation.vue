<template>
    <div
        class="w-full bg-white dark:bg-slate-800 flex items-center justify-between h-[100px]">
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
                        class="group relative uppercase text-[.9rem] dark:text-white dark:after:bg-white after:left-0 flex group rounded-full transition after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:w-0 group-hover:after:w-full"
                        inactive-class="hover:after:w-full">
                        <span
                            class="group-hover:-translate-y-1 font-semibold transition">
                            {{ item.label }}
                        </span>
                    </ULink>
                </li>
            </ul>
        </div>
        <!-- responsive -->
         <UDropdown
            class="lg:hidden flex"
            :items="itemsLinkDropdown"
            :popper="{ 
                arrow: true 
            }"
            :ui="{
                width: 'w-[250px]'
            }">
            <template 
                #account="{ 
                    item 
                }">
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
        <!-- none responsive -->
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
                        class="group relative uppercase text-[.9rem] group dark:after:bg-white after:left-0 flex rounded-full transition after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:w-0 group-hover:after:w-full"
                        inactive-class="hover:after:w-full">
                        <UIcon
                            :name="item.icon"
                            class="w-6 h-6 group-hover:-translate-y-1 transition"/>
                    </ULink>
                </li>
                <li class="border-l-[1px] border-gray-300 h-[20px]"></li>
                <li>
                    <UIcon  
                        :name="modes.icon"
                        class="w-6 h-6 mt-1 cursor-pointer hover:scale-110 transition"
                        @click="() => {
                            toggleMode();
                        }"/>
                </li>
                <li
                    class="">
                    <a
                        href="../../files/pdf/CV.pdf"
                        target="_blank"
                        class="py-2 px-4 text-white rounded-md dark:bg-white dark:text-black bg-black">
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
const isDarkMode: Ref<boolean> = ref<boolean>(false);
const modes = ref({
  mode: 'Dark Mode',
  icon: 'material-symbols:dark-mode-outline-rounded'
})

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

const itemsLinkDropdown = computed(() => [
    [
        {
            label: 'Navigation',
            icon: '',
            to: ''
        }
    ], 
    [
        {
            label: 'Home',
            icon: 'material-symbols:home',
            to: '/'
        },
        {
            label: 'Portfolio',
            icon: 'bytesize:portfolio',
            to: '/portfolio',
        },
        {
            label: 'Contact',
            icon: 'material-symbols:call',
            to: '/contact',
        }
    ], 
    [
        {
            label: 'Social Media',
            icon: '',
            to: '',
        }
    ],
    [
         {
            label: 'Fackbook',
            icon: 'uil:facebook-f',
            to: ''
        },
        {
            label: 'Instagram',
            icon: 'mingcute:instagram-line',
            to: ''
        },
        {
            label: 'Telegram',
            icon: 'mdi:telegram',
            to: 'https://t.me/OuthMenghour'
        },
        {
            label: 'Github',
            icon: 'mdi:github',
            to: 'https://github.com/Voxodinson',
        },
    ],
    [
        {
            label: modes.value.mode,
            icon:  modes.value.icon,
            to: '',
            click: () => {
                toggleMode();
            }
        }
    ]
]);

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
        icon: 'mdi:telegram',
        to: 'https://t.me/OuthMenghour'
    },
    {
        icon: 'mdi:github',
        to: 'https://github.com/Voxodinson'
    },
]
/**
 * End Declare variable
 */

/**
 * Some logical section
 */
const toggleMode = (): void => {
    isDarkMode.value = !isDarkMode.value;

    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');

        modes.value.mode = 'Light Mode';
        modes.value.icon = 'line-md:moon-alt-to-sunny-outline-loop-transition';

        localStorage.setItem('darkMode', 'true');
    } else {
        document.documentElement.classList.remove('dark');

        modes.value.mode = 'Dark Mode';
        modes.value.icon = 'line-md:sunny-outline-to-moon-loop-transition';

        localStorage.setItem('darkMode', 'false');
    }
};

onMounted((): void => {
    const savedMode: string | null = localStorage.getItem('darkMode');

    if (savedMode === 'true') {
        isDarkMode.value = true;

        document.documentElement.classList.add('dark');

        modes.value.mode = 'Light Mode';
        modes.value.icon = 'line-md:moon-alt-to-sunny-outline-loop-transition';
    } else {
        isDarkMode.value = false;
        
        document.documentElement.classList.remove('dark');

        modes.value.mode = 'Dark Mode';
        modes.value.icon = 'line-md:sunny-outline-to-moon-loop-transition';
    }
});

/**
 * Some logical section
 */

</script>