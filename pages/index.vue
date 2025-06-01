<template>
    <div
        class="w-full">
        <div 
            class="w-full flex h-[50vh] flex-col items-center justify-center">
            <h1
                class="text-center text-[3rem] uppercase font-semibold">
                Outh Menghour <br>
                End-to-End Web Development <br>
                Based in Cambodia
            </h1>
            <span
                class="flex items-center gap-3 mt-6 text-[1.2rem] py-1 px-4 rounded-full bg-gray-100">
                <UIcon
                    name="svg-spinners:blocks-scale"
                    class="w-4 h-4"/>
                Portfolio
            </span>
        </div>
        <div 
            class="w-full grid grid-cols-3 items-center pb-12">
            <div 
                class="w-fullf flex flex-col gap-16">
                <div 
                    class="flex flex-col">
                    <h3
                        class=" uppercase text-gray-400 text-md">contact</h3>
                    <p
                        class="text-xl mt-3">
                        Phnom Penh, Cambodia
                    </p>
                    <ULink
                        to="mailto:outh.menghour@gmail.com"
                        class="text-xl hover:underline transition">
                        Outh.menghour@gmail.com
                    </ULink>
                    <ULink
                        to="tel:067961719"
                        class="text-xl hover:underline transition">
                        +885 67961719
                    </ULink>
                </div>
                <div 
                    class="flex flex-col">
                    <h3
                        class=" uppercase text-gray-400 text-md">service</h3>
                    <p
                        class="text-xl mt-3">
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
                            :src="AtAngkorWat" 
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
                        class=" uppercase text-end text-gray-400 text-md">
                        year of <br> experience
                    </h3>
                    <p
                        class="text-xl mt-3">
                        Web Development
                    </p>
                </div>
                <div 
                    class="flex flex-col justify-start items-end">
                    <h3
                        class=" uppercase text-end text-gray-400 text-md">
                        Project <br> Done (Publish)
                    </h3>
                    <p
                        class="text-xl mt-3">
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
                class="text-gray-600 text-center">
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