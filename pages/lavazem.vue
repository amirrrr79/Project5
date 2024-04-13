<template>
    <div class="search">
     <input class="form-control me-2 input ms-2" type="search" placeholder="دنبال چی میگردی؟" aria-label="Search">
     <button class="btn btn-danger" type="submit">جستجو</button>
   </div>
   <div class="cards">
       <div class="center" v-for="(lavazems,index) in lavazem" :key="index">
         <div class="card" style="width: 18rem;">
           <NuxtLink :to="{name:'m.image.text.price', params:{ image:lavazems.image,text:lavazems.text,price:lavazems.price}}" title="اطلاعات بیشتر"><img :src="lavazems.image" class="card-img-top" alt="..."></NuxtLink>
          <div class="card-body">
          <p class="card-text mt-2 mb-4">{{ lavazems.text }}</p>
          <div class="card-text2 ">
          <h5 class="price ms-2" style="color:#dc3545">تومان{{ lavazems.price }}</h5>
          <a href="#" class="btn btn-danger"  @click.prevent="AddLavazem(lavazems)"><i class="bi bi-cart4 ms-2" style="color: white;" ></i>افزودن</a>
         </div>
         </div>
       </div>
      </div>
   </div>

</template>

<script setup>
import { useCartStore } from '../stores/cart';
 const store=useCartStore()
 
 function AddLavazem(lavazems){
    store.Add(lavazems)
 }

   
     const lavazem=reactive([
   {
        id:5,
        image:'/image/img30.jpg',
        text:'هدفون بی سیم اپل مدل AirPods Pro 2nd Generation New',
        price:900
   },
   {
        id:30,
        image:'/image/img55.jpeg',
        text:'پاور بانک شیائومی مدل Redmi ظرفیت 10000 میلی آمپرساعت',
        price:948
   }
   ,
   {
        id:8,
        image:'/image/img31.jpg',
        text:'هدفون بلوتوثی شیائومی مدل Redmi Buds 4 Pro',
        price:520
   },
   {
        id:10,
        image:'/image/img36.jpg',
        text:'هدست سونی مدل Sony Headset 3D Pulse',
        price:880
   },


   {
        id:11,
        image:'/image/img37.jpg',
        text:'هدفون دورگردنی بی‌ سیم انکر مدل SoundCore Life U2i',
        price:400
   },
   {
        id:12,
        image:'/image/img38.jpg',
        text:'هدفون بی سیم اپل مدل AirPods',
        price:800
   }
   ,
   {
       id:31,
       image:'/image/img50.jpg',
       text:'هدفون بی‌ سیم هایلو مدل x1 neo',
       price:333
   },
   {
       id:32,
       image:'/image/img52.jpg',
       text:'پاور بانک انکر ظرفیت 10000 میلی آمپرساعت 25W مدل A1246',
       price:380
   }
   ,
   {
       id:33,
       image:'/image/img51.jpg',
       text:'هدفون بلوتوثی سونی مدل Sony WH-CH510',
       price:480
   }
   ,
   {
       id:34,
       image:'/image/img53.jpg',
       text:'هدفون بی سیم اپل مدل AirPods 2',
       price:662
   }
   ,
   {
      id:35,
       image:'/image/img55.jpeg',
       text:'پاور بانک شیائومی مدل Redmi ظرفیت 20000 میلی آمپرساعت',
       price:126
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
 .card .card-img-top:hover{
  transform: scale(.9);
  transition: .7s;
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