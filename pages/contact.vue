<template>
    <div
        class="w-full md:w-[70%] md:mt-[40px] pb-[50px] gap-12 h-fit flex flex-col items-start justify-start ">
        <div 
            class="w-full h-fit flex flex-col items-start justify-start">
            <h3 
                class="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                Contact Me
            </h3>
            <p
                class="text-gray-700 text-[.9rem] md:text-[1rem] dark:text-white">
                If have any questions, Feel free to get in touch with me.
            </p>
            <div 
                class=" flex items-center gap-3 mt-6">
                <UIcon
                    name="material-symbols-light:mail-outline"
                    class="w-8 h-8"/>
                <ULink
                    to="mailto:outh.menghour@gmail.com"
                    class="text-md hover:underline transition">
                    outh.menghour@gmail.com
                </ULink>
            </div>  
            <div 
                class=" flex items-center gap-3">
                <UIcon
                    name="iconamoon:arrow-top-right-1-thin"
                    class="w-8 h-8"/>
                <ULink
                    to="tel:067961719"
                    class="text-md hover:underline transition">
                    +885 67961719
                </ULink>
            </div>
            <div 
                class=" flex items-center gap-3">
                <UIcon
                    name="healthicons:geo-location-outline"
                    class="w-8 h-8"/>
                <ULink
                    to="https://maps.app.goo.gl/mm6649TudqpBje6G7"
                    class="text-md hover:underline transition">
                    Phnom Penh, Cambodia
                </ULink>
            </div>
            <p
                class="text-gray-700 dark:text-white py-6 font-semibold capitalize">
                Fine me on
            </p>
            <ul 
                class="flex gap-6 items-center border-b-[1px] border-gray-200 w-full pb-6">
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
                            class="w-8 h-8 group-hover:-translate-y-1 transition"/>
                    </ULink>
                </li>
            </ul>
        </div>
        <div 
            class="w-full">
            <h3 
                class="text-2xl font-bold text-gray-800 dark:text-white">
                Get in touch
            </h3>
            <form
                name="contact_form" 
                @submit.prevent="handleSubmit"
                class="w-full bg-gray-100 dark:bg-slate-600 rounded-md p-3 lg:p-6 mt-6">
                <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 pb-4">
                    <UFormGroup 
                        class="w-full" 
                        label="Firstname" 
                        name="firstname">
                        <UInput
                            type="text"
                            color="white"
                            variant="outline"
                            size="lg"
                            name="firstname" role="input"
                            class="w-full"
                            placeholder="Firstname"
                            v-model="formData.firstname" />
                    </UFormGroup>
                    <UFormGroup 
                        class="w-full" 
                        label="Lastname" 
                        name="lastname">
                        <UInput
                            type="text"
                            color="white"
                            variant="outline"
                            size="lg"
                            name="lastname" role="input"
                            class="w-full"
                            placeholder="Lastname"
                            v-model="formData.lastname" />
                    </UFormGroup>
                    <UFormGroup class="w-full" label="Email" name="email">
                        <UInput
                        type="email"
                        color="white"
                        variant="outline"
                        size="lg"
                        name="email" role="input"
                        class="w-full"
                        placeholder="Your Email"
                        v-model="formData.email" />
                    </UFormGroup>
                    <UFormGroup 
                        class="w-full" 
                        label="Phone" 
                        name="phone">
                        <UInput
                            type="tel"
                            color="white"
                            variant="outline"
                            size="lg"
                            name="phone" role="input"
                            class="w-full"
                            placeholder="+855 000-000-000"
                            v-model="formData.phone" />
                    </UFormGroup>
                </div>
                <UFormGroup 
                    class="w-full" 
                    label="Message" 
                    name="message">
                    <UTextarea
                        color="white"
                        placeholder="Your Message"
                        name="message" v-model="formData.message" />
                </UFormGroup>
                <div 
                    v-if="successMessage" 
                    class="mt-4 text-green-600 w-full h-fit p-3 rounded-md border-[1px] border-green-400 bg-green-200">
                    {{ successMessage }}
                </div>
                <div 
                    v-if="errorMessage" 
                    class="mt-4 text-red-600 w-full h-fit p-3 rounded-md border-[1px] border-red-400 bg-red-200">
                    {{ errorMessage }}
                </div>
                <div class="flex gap-2 mt-6 pt-6 border-t-[1px] border-gray-200 items-end justify-end">
                    <UButton
                        type="submit"
                        size="sm"
                        color="black"
                        label="Send"
                        variant="soft"
                        icon="ri:send-plane-fill"
                        :padded="false"
                        class="bg-black dark:bg-white py-2 px-3 text-white dark:text-black"
                        :loading="isLoading" :disabled="isLoading" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

definePageMeta({
    colorMode: 'light'
});
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
        to: ''
    },
    {
        icon: 'mdi:github',
        to: ''
    },
];


const formData = ref({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
});

const isLoading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const serviceID = 'service_3ige9zk';
const templateID = 'template_n72zprr';
const publicKey = 'a4wxbYdyVmnoiMbYY'; 

const handleSubmit = async () => {
    isLoading.value = true;
    successMessage.value = '';
    errorMessage.value = '';

    try {
        const response = await emailjs.send(
            serviceID,
            templateID,
            formData.value,
            publicKey
        );
        if (response.status === 200) {
            successMessage.value = 'Message sent successfully!';
            formData.value = {
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                message: ''
            };
        } else {
            errorMessage.value = 'Failed to send message.';
        }
    } catch (error) {
        errorMessage.value = 'An error occurred while sending the message.';
        console.error('EmailJS Error:', error);
    } finally {
        isLoading.value = false;
    }
};

</script>