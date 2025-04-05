
export default defineEventHandler(async (event)=>{
   

    
    const font= await useStorage('assets:server:Rosarivo').getItem('Rosarivo-Regular.ttf')
   
   if(!font){
    return{
      status:404,
      message:'File was not found.'
    }
   }else{
   setResponseHeaders(event,{
    "content-type":"font/ttf"
   })
   return{
    message:font
   }
  
   }

})