<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout/>
  </div>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs:{
 lang:'en'
  },
  link:[{
    rel:'icon',href:'/images/vita_logo.svg',type:'image/svg+xml'
  }]
})
useSeoMeta({
  ogTitle:'Vita - Free resume builder',
  ogDescription:'Vita is a no design skill required free and simple resume builder.',
  ogImage:'https://vitaresumebuilder.netlify.app/Images/vita_ad.png'
})
</script>
