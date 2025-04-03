<template>
    <div class="v-container">
        <ContentHeadingFormatter heading="Templates"/>
        <ClientOnly>
        <ContentResumeTemplatesA/>
    </ClientOnly>
        
    </div>
</template>
<script setup lang="ts">
useHead({
    title:'Explore Templates - Vita',
    meta:[
        {
           name:'description',content:'Select a resume templates that suits your needs.'
        }
    ]
})
</script>