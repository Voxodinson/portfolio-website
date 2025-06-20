<template>
    <div
        class="w-full h-fit md:mt-[40px] pb-[50px]">
        <h3 
            class="text-3xl mt-6 font-bold text-gray-800 dark:text-white mb-8">
            Work
        </h3>
        <div 
            class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
            <ProjectCard
                :data="projects"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { 
    ProjectCard 
} from '~/components/reusable';
import { 
    HomePagePinpoint 
} from '~/assets/images';
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
        policy: 'true'
    },
    {
        id: 3,
        title: 'Comprehensive Online Examination Platform',
        detail: 'Tools for administrators or instructors to create exams, define questions, set time limits, and configure scoring.',
        img: 'https://examonline.in/wp-content/uploads/2021/11/blog1.png',
    },
    {
        id: 4,
        title: 'PinPoint: Intelligent Local Place Recommendation Engine',
        detail: 'The experience was very pleasant. Communication was clear, and the process was efficient. I would recommend it to others. Good quality and friendly service. A few minor issues but nothing that impacted the overall positive experience.',
        img: HomePagePinpoint,
    }
]
</script>