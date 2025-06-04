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
                    class="text-start mt-4 md:mt-6 lg:mt-8 text-xl md:text-3xl lg:text-5xl uppercase font-semibold text-white">
                    Outh Menghour <br>
                    End-to-End Web Development <br>
                    Based in Cambodia
                </h1>
            </div>
            <picture>
                <source media="(max-width: 430px)" :srcset="AtAngkorWat">
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
        <WorkProcess/>
        <MyProject/>
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
    MyProject,
    Experience,
    Education,
    Skills,
    About,
    WorkProcess
} from '~/components/ui';
definePageMeta({
    colorMode: 'light'
});

</script>