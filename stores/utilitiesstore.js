export const useUtilitiesStore=defineStore('Utilities',()=>{
    const isNavbarActive=ref(false);
    const navLinks =ref([
        {
            id:1,name:'Home',to:'/',active:true,
        },
        {
            id:2,name:'Features',to:'/',active:false
        },
        {
            id:3,name:'How it works',to:'/',active:true,
        },
        {
            id:4,name:'Testimonials',to:'/',active:true,
        },
        {
            id:5,name:'Support',to:'/',active:true,
        }
    ])
    return{
        navLinks,
        isNavbarActive
    }
})