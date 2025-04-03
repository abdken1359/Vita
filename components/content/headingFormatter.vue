<template>
    <section class="my-10 text-center">
        <h1 class="text-teal-500 dark:text-teal-400">{{ heading }}</h1>
        <p class="w-full md:w-3/4 lg:w-1/2 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium earum nihil voluptas sit adipisci laboriosam rerum quo tenetur dolore officia</p>
    </section>
</template>
<script setup lang="ts">
defineProps({
    heading:{
        type:String,
        required:true
    }
})
</script>