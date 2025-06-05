<template>
    <div 
        class="w-full grid grid-cols-2 pb-[50px] md:mt-[40px]">
        <div 
            class="w-full h-[70vh]">
            <div 
                class=" bg-black w-full h-full relative rounded-md overflow-hidden">
                <div 
                    class="flex h-full transition-transform duration-500 ease-in-out" 
                    :style="{ transform: `translateX(-${slideshow_CurrentIndex * 100}%)` }">
                    <div
                        v-for="(item, index) in userCommand"
                        :key="index"
                        class="flex-shrink-0 w-full h-full">
                        <img
                            :src="item.image"
                            class="w-full h-full object-scale-down rounded-lg"
                            alt="feedback image"/>
                    </div>
                </div>
                <button
                    @click="prevSlide"
                    class="absolute left-4 top-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition focus:outline-none">
                    <UIcon
                        name="material-symbols:chevron-left-rounded"
                        class="w-12 h-12 mr-1"/>
                </button>
                <button
                    @click="nextSlide"
                    class="absolute right-4 top-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition focus:outline-none">
                    <UIcon
                        name="material-symbols:chevron-right-rounded"
                        class="w-12 h-12 ml-1"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ULink } from '#components';

const route = useRoute();
const projectId = route.params.id;
const project: Ref<any> = ref<any>(null);
const pending: Ref<boolean> = ref<boolean>(true);
const slideshow_CurrentIndex: Ref<number> = ref<number>(0);

const projects = [
    {
        id: '1',
        title: 'JS Express Delivery Admin',
        detail: 'This strongly suggests that the application is a web-based administrative interface for managing an express delivery service.',
        img: 'https://cdn.dribbble.com/userupload/16072864/file/original-75fa6cf2feb9be53365f225615c3aecd.png?resize=400x0',
    },
    {
        title: 'Comprehensive Online Examination Platform',
        detail: 'Tools for administrators or instructors to create exams, define questions, set time limits, and configure scoring.',
        img: 'https://examonline.in/wp-content/uploads/2021/11/blog1.png',
    },
    {
        title: 'PinPoint: Intelligent Local Place Recommendation Engine',
        detail: 'The experience was very pleasant. Communication was clear, and the process was efficient. I would recommend it to others. Good quality and friendly service. A few minor issues but nothing that impacted the overall positive experience.',
        img: 'https://cdn.dribbble.com/userupload/15231300/file/original-d1207f24364f1573c96e9e81a732e342.png?format=webp&resize=400x300&vertical=center',
    }
]
const userCommand: any = [
    {
        user: {
            name: 'Vox Odinson',
            profile: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        desc: 'Location of the hotel & views from all windows including lobby, room, restaurant',
        image: 'https://i.pinimg.com/736x/08/ac/0b/08ac0bbfddbf5385e17c7420df7bf942.jpg',
        rating: 4,
        date: '10-05-2023 12:30:00'
    },
    {
        user: {
            name: 'Vox Odinson',
            profile: ''
        },
        name: 'Vox Odinson 2',
        desc: 'Location of the hotel & views from all windows including lobby, room, restaurant& views from all windows including lobby, room, restaurant',
        image: 'https://i.pinimg.com/736x/01/15/c7/0115c7346b28bbb3a9eefe1447dae0d8.jpg',
        rating: 4,
        date: '10-05-2023 12:30:00'
    },
    {
        user: {
            name: 'Vox Odinson',
            profile: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D'
        },
        name: 'Vox Odinson 3',
        desc: 'Location of the hotel & views from all windows including lobby, room, restaurant& views from all windows including lobby, room, restaurant',
        image: 'https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg',
        rating: 2,
        date: '10-05-2023 12:30:00'
    }
]
function prevSlide() {
    if (slideshow_CurrentIndex.value > 0) {
        slideshow_CurrentIndex.value--;
    }
}

function nextSlide() {
    if (slideshow_CurrentIndex.value < userCommand.length - 1) {
        slideshow_CurrentIndex.value++;
    }
}

onMounted(() => {
    setTimeout(() => {
        project.value = projects.find(p => p.id === projectId);
        pending.value = false;
    }, 500);
});

</script>
