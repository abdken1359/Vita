
<style scoped>

</style>
<template>
   <nav class="activeNav">
      <div class="mr-auto">
        <NuxtLink to="/" class="font-bold">
            <NuxtImg src="/Images/vita_logo.svg" class="w-12" alt="Picture of letter V"/>
        </NuxtLink>

      </div>

      <div class="ml-auto hidden h-full md:flex items-center ">
        <template v-for="n in utils.navLinks" :key="n.id"> 
            <NuxtLink :to="n.to" class="navLink">{{ n.name }}</NuxtLink>
        </template>
        
        
      </div>
      <ContentThemeTogler/>
   </nav>
</template>
<script setup lang="ts">
const utils=useUtilitiesStore();
</script>