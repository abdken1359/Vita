<template>
    <div>
     

      <ContentMainhero/>
      <div class="hidden">
      <ContentMainFeatures/>
    </div>
    
    </div>
</template>
<script setup lang="ts">
const route = useRoute();
useHead({
  title:'Vita-Free resume builder',
  meta:[{
    name:'description',
    content:'Welcome to Vita, your absolutely free resume builder. Choose amongst many templates, and download your resume in PDF format'
  }]
})

</script>