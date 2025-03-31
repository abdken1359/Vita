<template>
    <div class="container mx-auto p-4">
        <h1>Hey there</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam, harum velit esse mollitia laboriosam provident maxime assumenda! Dolore possimus, exercitationem rerum beatae quisquam fugiat sapiente ab nihil cupiditate necessitatibus!</p>
   <button type="button" class="bg-primary text-white
   active:bg-red-400
   "
   @click="toggle()">Change mode</button>
   </div>
</template>
<script setup lang="ts">
const route = useRoute();
useHead({
  title:'Vita-Free resume builder'
})
const isDark=useDark()
const toggle=useToggle(isDark);
</script>