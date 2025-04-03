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
        },
        {
            id:6,name:'Templates',to:'/templates/',active:false,
        },
        {
            id:7,name:'About',to:'/',active:false,
        }
    ])
    const temporalNavLinks=computed(()=>{
        return navLinks.value.filter(n=>n.name==='Templates'||n.name==='About')
    })
    return{
        navLinks,
        isNavbarActive,
        temporalNavLinks
    }
})