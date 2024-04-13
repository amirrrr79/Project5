<template>
    <div class="search">
     <input class="form-control me-2 input ms-2" type="search" placeholder="دنبال چی میگردی؟" aria-label="Search">
     <button class="btn btn-danger" type="submit">جستجو</button>
   </div>
   <div class="cards">
       <div class="center" v-for="(consoles,index) in console" :key="index">
         <div class="card" style="width: 18rem;">
           <NuxtLink :to="{name:'m.image.text.price', params:{ image:consoles.image,text:consoles.text,price:consoles.price}}" title="اطلاعات بیشتر"><img :src="consoles.image" class="card-img-top" alt="..."></NuxtLink>
          <div class="card-body">
          <p class="card-text mt-2 mb-4">{{ consoles.text }}</p>
          <div class="card-text2 ">
          <h5 class="price ms-2" style="color:#dc3545">تومان{{ consoles.price }}</h5>
          <a href="#" class="btn btn-danger"  @click.prevent="AddConsole(consoles)"><i class="bi bi-cart4 ms-2" style="color: white;" ></i>افزودن</a>
         </div>
         </div>
       </div>
      </div>
   </div>

</template>

<script setup>
import { useCartStore } from '../stores/cart';
 const store=useCartStore()
 
 function AddConsole(consoles){
    store.Add(consoles)
 }



     const console=reactive([
   {
        id:9,
        image:'/image/img35.jpg',
        text:'کنسول بازی سونی مدل Playstation 5 ظرفیت 825 گیگابایت سری 1216A',
        price:150
   },
   {
        id:36,
        image:'/image/img80.jpg',
        text:'دسته بازی پلی استیشن 5 سونی مدل DUALSENSE',
        price:950
        
   }
   ,
   {
        id:37,
        image:'/image/img81.jpg',
        text:'کنسول بازی سونی مدل Playstation 4 Pro 1T کارکرده R2',
        price:900
   },
   {
        id:38,
        image:'/image/img82.jpg',
        text:'کنسول بازی مایکروسافت مدل Xbox Series X ظرفیت 1 ترابایت',
        price:750
   },


   {
        id:39,
        image:'/image/img83.jpg',
        text:"دسته بازی مدل DualShock 4",
        price:389
   },
   {
        id:40,
        image:'/image/img84.jpg',
        text:'کنسول بازی سونی مدل Playstation 5 Slim Digital Edition ظرفیت 1 ترابایت 2000B',
        price:280
   }
   ,
   {
       id:41,
       image:'/image/img85.jpg',
       text:'مجموعه کنسول بازی مایکروسافت مدل Xbox Series S ظرفیت 1 ترابایت',
       price:600
   },
   
   
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
