<style scoped>
h1,h2,h3,h4,h5,h6{
    font-family: 'Rosarivo';
   }
</style>
<template>
    <div class="v-container my-10 overflow-x-auto">
    <section id="resume" class=" flex items-center border">
        <div class="w-1/3 h-[90vh] bg-amber-100 p-4 print:bg-amber-100 print:w-1/3 print:p-4">
                   <img class="rounded-full w-2/3" alt="User Image"
                    src="https://images.generated.photos/9Tftht5baZArU-cPxswpaZ-k1kX-hY_I_2Ct9eQrfCI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTQ1NjYzLmpwZw.jpg"/>
        

                    <!--CONTACT FEILD-->
                    <article class="flex flex-col mt-[100px] gap-4 mx-auto text-center justify-center">
                        <div>
                            <Icon name="heroicons:phone" class="text-4xl print:block print:text-4xl text-black" 
                            aria-label="Phone icon"/>
                        </div>
                    </article>
                </div>
        <div class="p-4 w-2/3">
            <p>{{ app }} {{ plead }}</p>
        <button @click="requestDevice()" class="bg-red-400 print:bg-red-400 " >Print it</button>
        <div class="my-4 p-4 text-white" :class="isConnected?'bg-green-500':'bg-red-500'">
            {{ isConnected?'Connected!':'Not connected!' }} {{ server }}</div>
            <button class="bg-orange-500 dark:bg-orange-400 dark:text-black text-white" @click="mode=trueMode">{{trueMode}}</button>
    </div>
    
    </section>

    </div>

</template>
<script setup lang="ts">
import { useStorage } from '@vueuse/core'
const {app}=useNuxtApp();
const isVisible=useDocumentVisibility()
const plead=ref('Please go away 😃!')
const {isConnected,requestDevice,server}=useBluetooth({
    acceptAllDevices:true
})
const mode=useColorMode({
    attribute:'theme',
    modes:{
        dim:'dim',
        cafe:'cafe'
    }
})
const trueMode=computed(()=>{
    switch (mode.value){
        case 'light':
            return 'dark'
            break;
        case 'dark':
            return 'light'
            break;
       
       default:
        return 'auto'
    }
})
watch(isVisible,(newVal)=>{
    if(newVal==='hidden'){
        plead.value='🎉 Welcome back!'
        setTimeout(()=>{
            plead.value='Please go away 😃!'
        },2000)

    }

})
</script>