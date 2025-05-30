<template>
    <div
        class="w-full">
        <div 
            class="w-full flex h-[50vh] items-center justify-center">
            <h1
                class="text-center text-[3rem] uppercase font-semibold">
                Outh Menghour <br>
                End-to-End Web Development <br>
                Based in Cambodia
            </h1>
        </div>
        <div 
            class="w-full grid grid-cols-3 items-center pb-12">
            <div 
                class="w-fullf flex flex-col gap-16">
                <div 
                    class="flex flex-col">
                    <h3
                        class=" uppercase text-gray-400">contact</h3>
                    <p
                        class="text-[1.5rem] mt-3">
                        Phnom Penh, Cambodia
                    </p>
                    <ULink
                        to="mailto:outh.menghour@gmail.com"
                        class="text-[1.5rem] hover:underline transition">
                        Outh.menghour@gmail.com
                    </ULink>
                    <ULink
                        to="tel:067961719"
                        class="text-[1.5rem] hover:underline transition">
                        +885 67961719
                    </ULink>
                </div>
                <div 
                    class="flex flex-col">
                    <h3
                        class=" uppercase text-gray-400">service</h3>
                    <p
                        class="text-[1.5rem] mt-3">
                        Web Development
                    </p>
                </div>
            </div>
            <div 
                class="w-full flex items-start justify-center">
                <div 
                    class="w-fit h-fit p-3 shadow-sm border-[1px] border-gray-200 rounded-full">
                    <div 
                        class="h-[600px] w-[400px] overflow-hidden rounded-full border-[1px] border-gray-200">
                        <img 
                            :src="MainImageCrop" 
                            alt="image"
                            class="w-full h-full">
                    </div>
                </div>
            </div>
            <div 
                class="w-full flex flex-col gap-16">
                <div 
                    class="flex flex-col justify-start items-end">
                    <h3
                        class=" uppercase text-end text-gray-400">
                        year of <br> experience
                    </h3>
                    <p
                        class="text-[1.5rem] mt-3">
                        Web Development
                    </p>
                </div>
                <div 
                    class="flex flex-col justify-start items-end">
                    <h3
                        class=" uppercase text-end text-gray-400">
                        Project <br> Done (Publish)
                    </h3>
                    <p
                        class="text-[1.5rem] mt-3">
                        2
                    </p>
                </div>
            </div>
        </div>
        <div 
            class="w-full flex items-center justify-center flex-col gap-3">
            <h3
                class=" uppercase text-gray-400">biography</h3>
            <p
                class="text-[1.5rem] text-center">
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
    </div>
</template>

<script setup lang="ts">
import MainImageCrop from '../assets/images/main_image_crop.jpg';
definePageMeta({
    colorMode: 'light'
});

</script>