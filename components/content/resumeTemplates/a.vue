<style scoped>
h1,h2,h3,h4,h5,h6{
    font-family: 'Rosarivo';
   }
   @media print{
    .try{
        background-color: wheat!important;
    }
   }
</style>
<template>
    <div class="v-container my-10 overflow-x-auto">
    <section id="resume" class=" flex  border">
        <div class="w-1/3 h-auto bg-amber-100 p-4 print:w-1/3 print:p-4">
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
            <button class="bg-orange-500  dark:bg-orange-400 dark:text-black text-white" @click="mode=trueMode">{{trueMode}}</button>
          <button class="my-4 bg-blue-500 dark:bg-blue-400 
          active:bg-blue-600 dark:active:bg-blue-500 text-white dark:text-black" @click="savePdf()">
            Get font
          </button>
          <p  class="print:font-[Georgia]" v-if="myText">{{ myText }}</p>
         
        <p  class="text-green-600 dark:text-green-500" @click="printPage()">{{ isSupported }}</p>
        </div>
    
    </section>

    </div>

</template>
<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import jsPDF from 'jspdf';
const {app}=useNuxtApp();
const isVisible=useDocumentVisibility()
const {share,isSupported}=useShare();
const startShare=()=>{
    share({
        title:'Come here quickly!',
        text:'And when i speak, you obey!',
        url:'https://vitaresumebuilder.netlify.app'
    })
}
const plead=ref('Please go away 😃!')
const {isConnected,requestDevice,server}=useBluetooth({
    acceptAllDevices:true
})
const myText=ref<String|number|undefined|Object>()
const pdf=new jsPDF();
const savePdf= async ()=>{
    console.log('Ready?')
    try{
        const data=await $fetch('/api/font_converter/testFont',{
            method:'POST'
        })

        if(data!==null||data!==undefined){
            myText.value=data;
            /*pdf.addFileToVFS('/fonts/Rosarivo/Rosarivo-Regular.ttf',myText.value)
            pdf.addFont('/fonts/Rosarivo/Rosarivo-Regular.ttf','Rosarivo',"normal")
            pdf.setFont("Rosarivo")
            pdf.text('Hello world',10,10);
            pdf.save('mytest.pdf')*/
        }

    
    }catch(e){
        console.log(e)
    }
}
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
function printPage(){
    print()
}
watch(isVisible,(newVal)=>{
    if(newVal==='hidden'){
        plead.value='🎉 Welcome back!'
        setTimeout(()=>{
            plead.value='Please go away 😃!'
        },2000)

    }

})
</script>