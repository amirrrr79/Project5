<template>
    <div class="section">

        <form class="form" @submit.prevent="login()">
            <div v-if="Error.length > 0"  class="mb-5" role="alert">
                    <ul class="mb-0">
                        <li style="color: red;" v-for="(Errors, index) in Error" :key="index">{{ Errors }}</li>
                    </ul>
            </div>
            <label for="inputEmail" class="form-label">ایمیل</label>
            <input type="email" id="inputEmail" class="form-control mb-4" aria-describedby="emailHelpBlock" v-model="FormData.email">
            <div id="emailHelpBlock" class="form-text">
            </div>

            <label for="inputPassword" class="form-label">رمز عبور</label>
            <input type="password" id="inputPassword" class="form-control" aria-describedby="passwordHelpBlock" v-model="FormData.password">
            <div id="passwordHelpBlock" class="form-text">
            </div>

            <button class="btn btn-danger mt-3">
                ورود
                <div v-if="loding" class="spinner-border spinner-border-sm ms-2"></div>
            </button>
        </form>
    </div>
</template>
<script setup>
import Swal from 'sweetalert2'
const Error=ref([]);
const { User } =use();
const loading=ref(false)
const FormData=reactive({
    email:'',
    password:''
})
  async function login(){
    loading.value=true
     try{
        const user=await $fetch('/api/login',{
            method:'POST',
            body:FormData
        })
        User.value=user
        alert();
        return navigateTo('/')
     }
     catch(error){
        Error.value=Object.values(error.data.data).flat();
        loading.value=false
     }
  }

  function alert(){
    Swal.fire({
            text: "شما وارد حساب کاربری خود شدید",
            icon: "success",
            background:'green',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
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
    width: 580px;
   
    
}
}

</style>
