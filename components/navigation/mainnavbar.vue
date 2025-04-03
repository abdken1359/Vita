
<style scoped>

</style>
<template>
   <nav>
      <div class="mr-auto">
        <NuxtLink to="/" class="font-bold flex items-end">
            <NuxtImg src="/Images/vita_logo.svg" class="w-8 hidden" alt="Picture of letter V" />
            <span class="text-teal-500 dark:text-teal-400 text-xl font-['Arial']">Vita</span>
        </NuxtLink>

      </div>

      <div class="ml-auto hidden h-full md:flex items-center ">
        <template v-for="n in utils.temporalNavLinks" :key="n.id"> 
            <NuxtLink :to="n.to" class="navLink" active-class="text-teal-500 font-bold">{{ n.name }}</NuxtLink>
        </template>
        
        
      </div>
      <ContentThemeTogler/>
      <NuxtLink class="p-2 button hover:bg-gray-100 dark:hover:bg-neutral-700"
       aria-label="See app on github" href="https://github.com/abdken1359/Vita" target="_blank">
        <Icon name="mdi-github" class="text-xl"/>
      </NuxtLink>
   </nav>
</template>
<script setup lang="ts">
const utils=useUtilitiesStore();
</script>