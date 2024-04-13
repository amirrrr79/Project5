<template>
     <div class="search">
      <input class="form-control me-2 input ms-2" id="search" type="search" placeholder="دنبال چی میگردی؟" aria-label="Search" >
      <button href="" class="btn btn-danger">جستجو</button>
    </div>
    <div class="cards" id="cards">
        <div class="center" v-for="(mobiles,index) in mobile" :key="index">
          <div class="card" style="width: 18rem;">
            <div class="photo">
              <NuxtLink :to="{name:'m.image.text.price', params:{ image:mobiles.image,text:mobiles.text,price:mobiles.price}}" title="اطلاعات بیشتر"><img :src="mobiles.image" class="card-img-top img-card" alt="..."></NuxtLink>
            </div>
           <div class="card-body">
           <p class="card-text mt-2 mb-4">{{ mobiles.text }}</p>
           <div class="card-text2 ">
           <h5 class="price ms-2" style="color:#dc3545">تومان {{ mobiles.price }}</h5>
           <a href="#" class="btn btn-danger"  @click.prevent="AddMobile(mobiles)"><i class="bi bi-cart4 ms-2" style="color: white;" ></i>افزودن</a>
          </div>
          </div>
        </div>
       </div>
    </div>

</template>

<script setup>
import { useCartStore } from '../stores/cart';
 const store=useCartStore()
 
 function AddMobile(mobiles){
    store.Add(mobiles)
 }

    
      const mobile=reactive([
    {
        id:1,
        image:'/image/img20.webp',
        text:'گوشی موبایل شیائومی مدل Poco M6 Pro 4G رم 12 ظرفیت 512 گیگابایت دو سیم کارت',
        price:350
    },
    {
        id:2,
        image:'/image/img21.jpg',
        text:'گوشی موبایل شیائومی مدل Poco X6 Pro 5G رم 12 ظرفیت 512 گیگابایت دو سیم کارت',
        price:95
    }
    ,
    {
        id:3,
        image:'/image/img22.webp',
        text:'گوشی موبایل شیائومی مدل Redmi 12 رم 8 ظرفیت 256 گیگابایت دو سیم کارت',
        price:50
    },
    {
        id:4,
        image:'/image/img23.jpg',
        text:'گوشی موبایل اپل کارکرده مدل iPhone 11 Pro Max ظرفیت 256 گیگابایت ZA',
        price:100
    },


    {
        id:13,
        image:'/image/img40.jpg',
        text:'گوشی موبایل آنر مدل 90 Lite رم 8 ظرفیت 256 گیگابایت دو سیم کارت',
        price:66000
    },
    
    {
        id:14,
        image:'/image/img41.jpg',
        text:'گوشی موبایل آنر مدل X5 رم 2 ظرفیت 32 گیگابایت دو سیم کارت',
        price:550
    }
    ,
    {
        id:15,
        image:'/image/img42.jpg',
        text:'گوشی موبایل اپل کارکرده مدل iPhone 13 Pro ظرفیت 256 گیگابایت ZA دو سیم کارت',
        price:900
    },
    {
        id:16,
        image:'/image/img43.webp',
        text:'گوشی موبایل سامسونگ مدل Galaxy A34 رم 8 ظرفیت 128 گیگابایت دو سیم کارت',
        price:350
    }
    ,
    {
        id:17,
        image:'/image/44.jpg',
        text:'گوشی موبایل شیائومی مدل POCO C40 رم 4 ظرفیت 64 گیگابایت دو سیم‌ کارت',
        price:777
    }
    ,
    {
        id:18,
        image:'/image/45.jpg',
        text:'گوشی موبایل سامسونگ مدل Galaxy S24 Ultra 5G رم 12 ظرفیت 256 گیگابایت دو سیم کارت',
        price:520
    }
  ])

</script>

<style scoped>
   .search{
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
 }
 .input{
  width: 70%;
 }
 
 .cards{
    margin-top: 5rem;
    transform: translate(0%);
    animation-name: move;
    animation-duration: 1s;
    
 }
 .center{
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
 .card-text2 h5{
    color: #dc3545;
  }
 .card-text2{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card{
    overflow: hidden;
  }
  .photo{
    overflow: hidden;
  }
  
.img-card:hover{
  transform: scale(1.1);
  transition: .7s;
}

@keyframes move{
  0%{
    transform: translateY(100%);
  }
}

  @media screen and ( min-width: 768px){
    .cards{
        display: flex;
        flex-wrap: wrap;
    }
    .center{
        flex:0 0 50%;
        margin-bottom: 5rem;
    }
    .search{
  display: flex;
  justify-content: center;
  margin-top: 10rem;
 }
 .input{
    width: 60%;
  height: 60px;
 }

  }
  @media screen and ( min-width: 1200px){
    .cards{
        display: flex;
        flex-wrap: wrap;
    }
    .center{
        flex:0 0 25%
    }

  }
</style>