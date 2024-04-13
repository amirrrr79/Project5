<template>
    <div class="section">

        <form class="form" @submit.prevent="register()">

            <div v-if="Error.length > 0"  class="mb-5" role="alert">
                    <ul class="mb-0">
                        <li style="color: red;" v-for="(Errors, index) in Error" :key="index">{{ Errors }}</li>
                    </ul>
            </div>

            <label for="name" class="form-label">نام و نام خانوادگی</label>
            <input type="text" id="inputName" class="form-control mb-4" aria-describedby="NameHelpBlock" v-model="FormData.name">
            <div id="NameHelpBlock" class="form-text">
            </div>

            <label for="inputEmail" class="form-label">ایمیل</label>
            <input type="email" id="inputEmail" class="form-control mb-4" aria-describedby="emailHelpBlock" v-model="FormData.email">
            <div id="emailHelpBlock" class="form-text">
            </div>

            <label for="inputPassword" class="form-label">رمز عبور</label>
            <input type="password" id="inputPassword" class="form-control mb-4" aria-describedby="passwordHelpBlock" v-model="FormData.password">
            <div id="passwordHelpBlock" class="form-text">
            </div>

            <label for="inputPassword1" class="form-label">تایید رمز عبور</label>
            <input type="password" id="inputPassword" class="form-control" aria-describedby="passwordHelpBlock" v-model="FormData.c_password">
            <div id="passwordHelpBlock" class="form-text">
            </div>

            <button class="btn btn-danger mt-3">
                ثبت نام
                <div v-if="loding" class="spinner-border spinner-border-sm ms-2"></div>
            </button>
        </form>
    </div>
</template>
<script setup>
  import Swal from 'sweetalert2'
  const loding=ref(false);
  const Error=ref([])

  const FormData=reactive({

   name:'',
   
   email:'',
   
   password:'',
   
   c_password:'',


  })

   async function register(){
       loding.value=true

        try{
            const user=await $fetch('/api/register',{
                method:'POST',
                body:FormData
            })

            alert();

            return navigateTo('/')

        }
        catch(error){
            Error.value=Object.values(error.data.data).flat();
            loding.value=false
        }
    }


    function alert(){
        Swal.fire({
             text: 'ثبت نام شما انجام شد',
             icon: 'success',
        });
       }
 
</script>
<style scoped>
.section{
    margin-top:4rem;
    display: flex;
    justify-content: center;
}
.form{
    padding: 5rem;
    border: 2px solid #dc3545;
    border-radius: 1rem;
    background-color: white;
    margin-left: .5rem;
    margin-right: .5rem;
   
}
.form input{
    width: 100%;
}
.btn{
    padding: .3rem 1.8rem .3rem 1.8rem;
}

@media screen and (min-width: 750px){
    .section{
    margin-top:5rem;
    display: flex;
    justify-content: center;
}
.form{
    padding: 5rem;
    border: 2px solid #dc3545;
    border-radius: 1rem;
    background-color: white;
    margin-left: 5rem;
    margin-right: 5rem;
    width: 480px;
   
    
}
.form input{
    width:100%;
}


.btn{
    padding: .3rem 1.8rem .3rem 1.8rem;
}

}
@media screen and (min-width: 830px){
    .section{
    margin-top:12rem;
    display: flex;
    justify-content: center;
}
}
@media screen and (min-width: 1200px){

    .form{
    padding: 5rem;
    border: 2px solid #dc3545;
    border-radius: 1rem;
    background-color: white;
    margin-left: 5rem;
    margin-right: 5rem;
    width: 600px;
   
    
}

}

</style>
