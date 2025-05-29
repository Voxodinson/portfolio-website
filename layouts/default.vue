<template>
    <div
        class="w-full h-fit flex justify-center items-start">
        <div class="w-[80%]">
            <Navigation/>
            <NuxtPage/>
        </div>
    </div>
</template>

<script setup lang="ts">

import { Navigation } from '~/components/ui';
</script>