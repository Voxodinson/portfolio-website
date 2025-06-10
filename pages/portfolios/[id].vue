<template>
    <div
        class="w-full  pb-[50px] md:mt-[40px] gap-6">
        <div
            class="w-full h-fit flex flex-col items-center justify-center">
            <div
                class="bg-black w-full h-full relative rounded-md overflow-hidden">
                <div
                    class="flex h-full transition-transform duration-500 ease-in-out"
                    :style="{ transform: `translateX(-${slideshow_CurrentIndex * 100}%)` }">
                    <div
                        v-for="(imagePath, index) in slideshowImages"
                        :key="index"
                        class="flex-shrink-0 w-full h-full">
                        <img
                            :src="imagePath"
                            class="w-full h-full object-scale-down rounded-lg"
                            alt="Project image"/>
                    </div>
                </div>
                <template 
                    v-if="slideshowImages.length > 1">
                    <button
                        @click="prevSlide"
                        class="absolute left-4 top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition focus:outline-none z-10">
                        <UIcon
                            name="material-symbols:chevron-left-rounded"
                            class="w-12 h-12 mr-1 text-black"/>
                    </button>
                    <button
                        @click="nextSlide"
                        class="absolute right-4 top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition focus:outline-none z-10">
                        <UIcon
                            name="material-symbols:chevron-right-rounded"
                            class="w-12 h-12 ml-1 text-black"/>
                    </button>
                </template>
            </div>
        </div>

        <div 
            v-if="project && !pending" 
            class="py-6 flex flex-col justify-start">
            <h1 
                class="text-2xl font-bold mb-4">
                {{ project.title }}
            </h1>
            <p 
                class="text-gray-700 dark:text-gray-300 mb-6">
                {{ project.detail }}
            </p>
            <div class="w-full flex items-center justify-end mt-[40px]">
                <ULink
                    v-if="project.link"
                    :to="project.link"
                    target="_blank"
                    class="flex items-center gap-3 hover:underline">
                    View Project
                    <UIcon 
                        name="i-heroicons-arrow-right-20-solid" 
                        class="ml-2" />
                </ULink>
            </div>
        </div>
        <div 
            v-else-if="pending" 
            class="p-4 flex flex-col justify-center">
            <Loading/>
        </div>
        <div 
            v-else 
            class="p-4 flex flex-col justify-center">
            <p>
                Project not found.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { 
    useRoute 
} from 'vue-router';
import { 
    ULink, 
    UIcon
} from '#components';
import { 
    ref, 
    computed, 
    onMounted,
    watch 
} from 'vue';
import { 
    Loading 
} from '~/components/loading';
import { 
    Exam1, 
    Exam2, 
    Exam3,
    Exam4,
    Exam5,
    Exam6,
    Exam7,
    Exam8 
} from '~/assets/images';

const route = useRoute();
const projectId = route.params.id;

const project = ref<any>(null);
const pending = ref<boolean>(true);
const slideshow_CurrentIndex = ref<number>(0);

const projects = [
    {
        id: '1',
        title: 'JS Express Delivery Admin',
        detail: 'This strongly suggests that the application is a web-based administrative interface for managing an express delivery service.',
        img: 'https://cdn.dribbble.com/userupload/16072864/file/original-75fa6cf2feb9be53365f225615c3aecd.png?resize=400x0',
        link: 'http://example.com/project1'
    },
    {
        id: '2',
        title: 'Comprehensive Online Examination Platform',
        detail: 'Tools for administrators or instructors to create exams, define questions, set time limits, and configure scoring.',
        img: 'https://examonline.in/wp-content/uploads/2021/11/blog1.png',
        images: [
            Exam1,
            Exam2,
            Exam3,
            Exam4,
            Exam5,
            Exam6,
            Exam7,
            Exam8,
        ],
        link: 'http://example.com/project2'
    },
    {
        id: '3',
        title: 'PinPoint: Intelligent Local Place Recommendation Engine',
        detail: 'The experience was very pleasant. Communication was clear, and the process was efficient. I would recommend it to others. Good quality and friendly service. A few minor issues but nothing that impacted the overall positive experience.',
        img: 'https://cdn.dribbble.com/userupload/15231300/file/original-d1207f24364f1573c96e9e81a732e342.png?format=webp&resize=400x300&vertical=center',
        link: 'http://example.com/project3'
    }
];

const slideshowImages = computed(() => {
    if (project.value && project.value.images && project.value.images.length > 0) {
        return project.value.images;
    } else if (project.value && project.value.img) {
        return [project.value.img];
    }
    return []; 
});

watch(project, (newProject, oldProject) => {
    if (newProject && newProject !== oldProject) {
        slideshow_CurrentIndex.value = 0;
    }
}, { immediate: true });


function prevSlide() {
    if (slideshow_CurrentIndex.value > 0) {
        slideshow_CurrentIndex.value--;
    } else {
        slideshow_CurrentIndex.value = slideshowImages.value.length - 1;
    }
}

function nextSlide() {
    if (slideshow_CurrentIndex.value < slideshowImages.value.length - 1) {
        slideshow_CurrentIndex.value++;
    } else {
        slideshow_CurrentIndex.value = 0;
    }
}

onMounted(() => {
    setTimeout(() => {
        project.value = projects.find(p => p.id === projectId);
        pending.value = false;
    }, 500);
});
</script>
