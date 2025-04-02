<template>
    <section class="mt-10 v-container">
        <div class="w-full md:w-3/4 lg:w-1/2">
        <h2>Impressive Features to Elevate Your Resume</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nemo facere voluptatem architecto, iste nisi explicabo minima accusamus ad voluptatibus quisquam officia cupiditate dolore cum accusantium ullam alias totam eum.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
    <template v-for="f in features" :key="f.id">
     <article class="p-4 border-2 border-gray-200 hover:border-blue-500 rounded-lg">
        <NuxtImg :src="f.image" class="w-20 mr-auto "/>
        <h4 class="my-5 text-red-500 dark:text-red-400">{{ f.title }}</h4>
        <p>{{ f.text }}</p>

     </article>
    </template>
</div>
    </section>
</template>
<script setup lang="ts">
const features=ref([
    {
        id:1, image:'/Images/features/customize.svg',alt:'Customization Icon',
        title:'Easy Customization',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nemo facere voluptatem architecto, iste nisi explicabo minima accusamus ad voluptatibus quisquam officia cupiditate dolore cum accusantium ullam alias totam eum.'
    },
    {
        id:2, image:'/Images/features/download.svg',alt:'Customization Icon',
        title:'Easy Customization',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nemo facere voluptatem architecto, iste nisi explicabo minima accusamus ad voluptatibus quisquam officia cupiditate dolore cum accusantium ullam alias totam eum.'
    }
])
</script>
