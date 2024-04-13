<template>
  <div>
    <nav class="navbar">
        <div class="nav-center">
            <div class="nav-header">
                <div class="logo">
                  <i class="bi bi-apple ms-2"></i>
                  <h5>AppStore</h5>
                </div>
                <div class="nav-sell">
                    <div class="icon">
                      <NuxtLink to="/sabad" style="background-color:rgb(220, 53, 69);border: none;border-radius: .5rem;" class="btn_cart4"><i class="bi bi-cart4 fs-2" style="color: white;"></i></NuxtLink>
                      <div class="count">{{ count }}</div>
                    </div>
                    <i class="bi bi-list-nested fs-2 me-4" id="nested" style="cursor: pointer;" @click="click()"></i>
                    <i class="bi bi-x-lg fs-2 me-4" id="close" @click="click2()" style="color:#dc3545;display: none;cursor: pointer;"></i>
                </div>
            </div>
            <ul class="ul">
                <li class="li"><NuxtLink activeClass="active" to="/">صفحه اصلی</NuxtLink></li>
                <li class="li"><NuxtLink activeClass="active" to="/mobile">موبایل</NuxtLink></li>
                <li class="li"><NuxtLink activeClass="active" to="/laptop"> لپ تاپ</NuxtLink></li>
                <li  class="li" ><NuxtLink  activeClass="active" to="/Console">کنسول بازی</NuxtLink></li>
                <li class="li"><NuxtLink activeClass="active" to="/lavazem">لوازم جانبی</NuxtLink></li>
            </ul>
            <div class="nav-sell2">
                <div v-if="User">
                    <NuxtLink to="/person" class="ms-3"><i class="bi bi-person-circle ms-1"></i>{{ User?.name }}</NuxtLink>
                    <a href="#" @click.prevent="logout()"><i class="bi bi-box-arrow-in-left ms-1"></i>خروج</a>
                </div>
                <div v-else>
                    <NuxtLink to="/login"><i class="bi bi-person-fill ms-1 me-3"></i>ورود</NuxtLink>
                    <NuxtLink to="/register"><i class="bi bi-person-fill-add  me-3"></i>ثبت نام</NuxtLink>
                </div>
                <div class="icon">
                <NuxtLink to="/sabad" style="background-color:rgb(220, 53, 69) ;border: none;border-radius: .5rem;" class="me-3 btn_cart4 me-4"><i class="bi bi-cart4 fs" style="color: white;"></i></NuxtLink>
                <div class="count">{{ count }}</div>
                </div>
            </div>
        </div>

    </nav>
    <aside class="sidebar" id="sidebar">
        <ul class="side-ul">
            <div v-if="User">
                <li class="side-li"><NuxtLink to="/person"><i class="bi bi-person-circle ms-2"></i>{{ User?.name }}</NuxtLink></li>
                <li class="side-li" @click.prevent="logout(products)"><i class="bi bi-box-arrow-in-left ms-2"></i><a href="">خروج</a></li>
            </div>
            <div v-else>
                <li class="side-li"><NuxtLink to="/login"><i class="bi bi-person-fill ms-2"></i>ورود</NuxtLink></li>
                <li class="side-li"><NuxtLink to="/register"><i class="bi bi-person-fill-add ms-2"></i>ثبت نام</NuxtLink></li>
            </div>
                
                <li class="side-li"><NuxtLink to="/"><i class="bi bi-house-door ms-2"></i>صفحه اصلی</NuxtLink></li>
                <li class="side-li"><NuxtLink to="/mobile"><i class="bi bi-phone ms-2"></i>موبایل</NuxtLink></li>
                <li class="side-li"><NuxtLink to="/laptop" href=""><i class="bi bi-laptop ms-2"></i>لپ تاپ</NuxtLink></li>
                <li class="side-li" ><NuxtLink to="/Console"><i class="bi bi-playstation ms-2"></i>کنسول بازی</NuxtLink></li>
                <li class="side-li"><NuxtLink to="/lavazem"><i class="bi bi-headphones ms-2"></i>لوازم جانبی</NuxtLink></li>
            </ul>
    </aside>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart';
const {User}=use();
 const store=useCartStore()
 const count=computed(()=>store.count)
 
async function logout(){
    
    try{
        const user=await $fetch('api/logout',{
            method:'POST'
        })
        User.value=null
        store.logout()
        
        return navigateTo('/')

     
    }
    catch(error){
        console.log(error)
    } 

}

  function click(){
    const btn=document.getElementById('nested')
    const btnClose=document.getElementById('close')
      const sidebar=document.getElementById('sidebar')
      sidebar.classList.add('side-show')
      btn.style.display='none'
      btnClose.style.display='block'
  }
  function click2(){
    const btn=document.getElementById('nested')
    const btnClose=document.getElementById('close')
      const sidebar=document.getElementById('sidebar')
      sidebar.classList.remove('side-show')
      btn.style.display='block'
      btnClose.style.display='none'

  }
 
</script>

<style scoped>
.ul{
    display: none;
}
.nav-sell2{
    display: none;
}
.nav-sell{
    display: flex;
    align-items: center;
}
.navbar{
    border: 1px solid rgb(176, 176, 176);
    display: block;
    box-shadow: 2.5rem 0 2.5rem 0 #808080;
    z-index: 1;
    background: white;
   
}
.nav-header{
    display: flex;
    justify-content: space-between;
    padding: .7rem;
}
.logo .bi{
    font-size: 1.5rem;
    color: #dc3545;
}
.sidebar{
    border: 2px solid rgb(176, 176, 176);
    width: 40%;
    height: 100%;
    position: absolute;
    left:0;
    background-color: rgb(255, 255, 255);
    transform: translate(300%);
   z-index: 2;
}
.side-show{
    transform: translate(0%);
    transition: .7s;
}
.side-li{
   border-bottom: 1px solid rgb(176, 176, 176);
   padding-bottom: 1.5rem;
   padding-top: 1.5rem;
   padding-right: .8rem;
}
.side-li a{
    color: black;
}
.side-li a:hover{
    color: #dc3545;
    transition: .5s;
}
.sidebar ul{
    padding: 0%;
}
.logo{
    display: flex;
    align-items: center;
}
.logo .bi{
    font-size: 2.2rem;
}
.logo h5{
    margin-top: .5rem;
}
.icon{
    position: relative;
}
.count{
    position: absolute;
    background-color: red;
    color: white;
    width: 1.3rem;
    height: 1.3rem;
    padding: .1rem;
    border-radius:50% ;
    right: 1.7rem;
    top:-.8rem;
    text-align: center;
   }
.btn_cart4{
    padding-top: 1rem;
    padding-bottom: .3rem;
    padding-left: .3rem;
    padding-right: .3rem;
}
@media screen and (min-width: 830px){
    .nav-sell{
        display: none;
    }
    .navbar{
        position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    z-index: 3;
    }
    .ul{
        display: flex;
        padding-top: 2rem;
        padding-bottom: 1.2rem;
    }
    .li{
        margin-left: 1.5rem;
    }
    .li a{
        color: black;
    }
    .li a:hover{
        color: rgb(220, 53, 69);
        transition: .5s;
    }
    .nav-sell2{
        display: flex;
       align-items: center;
    }
    .nav-sell2 a{
        color: black;
    }
    .nav-sell2 a:hover{
        color:#dc3545 ;
    }
    .nav-center{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .fs{
        font-size: 1.5rem;
    }
   .sidebar{display: none;}
   .icon{
    display: flex;
    position: relative;
   }
   .count{
    position: absolute;
    background-color: red;
    color: white;
    width: 1.3rem;
    height: 1.3rem;
    padding: .1rem;
    border-radius:50% ;
    right: 3.3rem;
    top:-.5rem;
    text-align: center;
   }
   .active{
    border-bottom: 2px solid #dc3545 ;
   }
   .btn_cart4{
    padding-top: .3rem;
    padding-bottom: .3rem;
    padding-left: .5rem;
    padding-right: .5rem;
}
}
</style>