export default defineNuxtPlugin(async (nuxtApp )=> {
    const {User}=use();
    const headers = useRequestHeaders(['cookie']);
    try{
        const user = await $fetch ('/api/me', {
            headers

    })
    User.value = user;
}
    catch(error){
       User.value=null
    }
})