export default defineEventHandler(async(event)=>{
    const body=await readBody(event)


    try{
         const data=await $fetch('http://localhost:8000/api/register',{
            method:'POST',
            body:body,
            headers:{
              'Accept':'application/json',
           }

         })
         return data.user;
    }
    catch(error){
        console.log(error)
        return error
    }
})