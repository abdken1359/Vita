<template>
    <section class="hero-root" >
        <div class="v-container hero-container">
            <div class="hero-item ">
                <h1 class="md:text-4xl lg:text-5xl  ">Unlock Your Next Job with a Standout Resume</h1>
                <p class="hidden" >Quickly build an eye-catching resume that gets noticed!
No design skills required—just fill in your details and let our builder do the rest.
Start your career journey today and create the perfect resume in a little amount of time!</p>
<p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cupiditate fugit dolore sed dolores eligendi suscipit corrupti et molestias assumenda natus, tempora, deleniti quae fuga vero delectus aliquam alias at.</p>
                <NuxtLink to="/" class="button py-3 lg:py-4 bg-red-500 w-3/4 md:w-1/3 mt-5 rounded-4xl
                 text-white mx-auto lg:mx-px
                  active:bg-red-400 active:translate-x-2
                 " @click.prevent.stop="downloadPdf()">Explore templates</NuxtLink>
            </div>
            <div class="hero-item  lg:block">
           <NuxtImg src="/Images/hero_img.svg" id="myP" class=" w-[80%] md:w-[50%] lg:w-[80%]" alt="A girl with professional tools around her." />
            </div>
            
        </div>
        
    </section>
</template>
<script setup lang="ts">

const myP=ref(null)
const downloadPdf = async () => {
   console.log(myP)
   try{
    print()
    
}catch(e){
    console.log(e)
}
          // Trigger download of the PDF
};
</script>