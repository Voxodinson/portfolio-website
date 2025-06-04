<template>
    <div
        class=" w-full flex items-start justify-start flex-col pt-[100px]">
        <h3 
            class="text-3xl font-bold text-gray-800 dark:text-white">
            Skills and Technologies
        </h3>
        <p
            class="text-gray-700 dark:text-white">
            The skills, tools and technologies I am really good at:
        </p>
       <div
            class="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-3 mt-6">  
            <div
                v-for="(skill, idx) in skills"
                :key="idx"
                class="flex items-center bg-white dark:bg-slate-700 gap-3 p-3 shadow-sm rounded-md border-[1px] border-gray-200">
                <UIcon
                    :name="skill.icon"
                    class="w-10 h-10"/>
                <h6
                    class="text-sm">
                    {{ skill.name }}
                </h6>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">

const skills = [
    {
        icon: 'devicon:html5',
        name: 'HTML'
    },
    {
        icon: 'devicon:css3',
        name: 'CSS'
    },
    {
        icon: 'devicon:javascript',
        name: 'JavaScript'
    },
    {
        icon: 'devicon:typescript',
        name: 'Typescript'
    },
    {
        icon: 'devicon:tailwindcss',
        name: 'Tailwind CSS'
    },
    {
        icon: 'devicon:bootstrap',
        name: 'Bootstrap CSS'
    },
    {
        icon: 'material-icon-theme:vue',
        name: 'Vue JS'
    },
    {
        icon: 'vscode-icons:file-type-nuxt',
        name: 'Nuxt JS'
    },
    {
        icon: 'vscode-icons:file-type-angular',
        name: 'Angular JS'
    },
    {
        icon: 'vscode-icons:file-type-reactjs',
        name: 'React JS'
    },
    {
        icon: 'logos:php',
        name: 'PHP'
    },
    {
        icon: 'material-icon-theme:laravel',
        name: 'Laravel'
    },
    {
        icon: 'devicon:mysql-wordmark',
        name: 'MySql'
    },
    {
        icon: 'devicon:postgresql',
        name: 'Postgresql'
    },
    {
        icon: 'devicon:git',
        name: '.git'
    },
    {
        icon: 'devicon:nodejs-wordmark',
        name: 'Node JS'
    }
]
</script>   