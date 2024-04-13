<template>
    <div class="section">
        <div class="button">
       <a href="" class="btn ms-2" id="New" style="background-color:#dc3545;color:white;" @click.prevent="New()">جدید ترین ها</a>
       <a href="" class="btn ms-2" id="Sell" @click.prevent="sell()">پرفروش ها</a>
       <a href="" class="btn" id="Cost"  @click.prevent="cost()">تخفیف دار</a>
     </div>
     <div class="cards" id="card_New">
    <div class="center" v-for="(New_kalas,index) in New_kala" :key="index">
   <div class="card" style="width: 18rem;">
  <NuxtLink :to="{name:'m.image.text.price', params:{ image:New_kalas.image,text:New_kalas.text,price:New_kalas.price}}" ><img title="اطلاعات بیشتر" :src="New_kalas.image" class="card-img-top" alt="..."></NuxtLink>
  <div class="card-body">
    <p class="card-text mt-2 mb-4">{{ New_kalas.text }}</p>
    <div class="card-text2 ">
        <h5 class="price ms-2" style="color:#dc3545">تومان {{ New_kalas.price }}</h5>
        <a href="#" class="btn btn-danger" @click.prevent="add1(New_kalas)"><i class="bi bi-cart4 ms-2" style="color: white;"></i>افزودن</a>
    </div>
  </div>
</div>
</div>
     </div>

     <div class="cards" id="card_Sell">
    <div   class="center" v-for="(Sell_kalas,index) in Sell_kala" :key="index">
   <div class="card" style="width: 18rem;">
  <NuxtLink :to="{name:'m.image.text.price', params:{ image:Sell_kalas.image,text:Sell_kalas.text,price:Sell_kalas.price}}"><img :src="Sell_kalas.image" class="card-img-top" alt="..."></NuxtLink>
  <div class="card-body">
    <p class="card-text mt-2 mb-4">{{ Sell_kalas.text }}</p>
    <div class="card-text2 ">
        <h5 class="price ms-2" style="color:#dc3545">تومان{{ Sell_kalas.price }}</h5>
        <a href="#" class="btn btn-danger" @click.prevent="add2(Sell_kalas)" ><i class="bi bi-cart4 ms-2" style="color: white;"></i>افزودن</a>
    </div>
  </div>
</div>
</div>
     </div>

     <div class="cards" id="card_Cost">
    <div   class="center" v-for="(Cost_kalas,index) in Cost_kala" :key="index">
   <div class="card" style="width: 18rem;">
  <NuxtLink :to="{name:'m.image.text.price', params:{ image:Cost_kalas.image,text:Cost_kalas.text,price:Cost_kalas.price}}"><img :src="Cost_kalas.image" class="card-img-top" alt="..."></NuxtLink>
  <div class="card-body">
    <p class="card-text mt-2 mb-4">{{ Cost_kalas.text }}</p>
    <div class="card-text2 ">
        <h5 class="price ms-2" style="color:#dc3545">تومان{{ Cost_kalas.price }}</h5>
        <a href="#" class="btn btn-danger"  @click.prevent="add3(Cost_kalas)"><i class="bi bi-cart4 ms-2" style="color: white;" ></i>افزودن</a>
    </div>
  </div>
</div>
</div>
     </div>


    </div>
</template>

<script setup>
import Swal from 'sweetalert2'


  const New_kala=reactive([
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
    }
  ])
  const Sell_kala=reactive([
    {   
        id:5,
        image:'/image/img30.jpg',
        text:'هدفون بی سیم اپل مدل AirPods Pro 2nd Generation New',
        price:900
    },
    {   
        id:6,
        image:'/image/img32.jpg',
        text:'لپ تاپ اچ پی مدل 255 G8',
        price:550
    }
    ,
    {
        id:7,
        image:'/image/img33.jpg',
        text:'گوشی موبایل شیائومی مدل Redmi Note 13 4G رم 8 ظرفیت 256 گیگابایت دو سیم‌ کارت',
        price:380
    },
    {
        id:8,
        image:'/image/img31.jpg',
        text:'هدفون بلوتوثی شیائومی مدل Redmi Buds 4 Pro',
        price:520
    }
  ])
  const Cost_kala=reactive([
    {
        id:9,
        image:'/image/img35.jpg',
        text:'کنسول بازی سونی مدل Playstation 5 ظرفیت 825 گیگابایت سری 1216A',
        price:150
    },
    {
      
        id:10,
        image:'/image/img36.jpg',
        text:'هدست سونی مدل Sony Headset 3D Pulse',
        price:880
    }
    ,
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
  ])
  function New(){
    
    const news=document.getElementById('New')
    const sells=document.getElementById('Sell')
    const costs=document.getElementById('Cost')
    const news_card=document.getElementById('card_New')
    const sells_card=document.getElementById('card_Sell')
    const costs_card=document.getElementById('card_Cost')

    news.style.backgroundColor="#dc3545"
    news.style.color="white"

    sells.style.backgroundColor="#cecece"
    sells.style.color="black"

    costs.style.backgroundColor="#cecece"
    costs.style.color="black"
     sells_card.style.display='none'
     costs_card.style.display='none'
     if(outerWidth<768){
        news_card.style.display="block"
       }
       else{
        news_card.style.display="flex"
        news_card.style.flexWrap="warp"
       }
     
     
     
   
   
 }
 function sell(){
    const news=document.getElementById('New')
    const sells=document.getElementById('Sell')
    const costs=document.getElementById('Cost')
    const news_card=document.getElementById('card_New')
    const sells_card=document.getElementById('card_Sell')
    const costs_card=document.getElementById('card_Cost')

  
    news.style.backgroundColor="#cecece"
    news.style.color="black"

    sells.style.backgroundColor="#dc3545"
    sells.style.color="white"

    costs.style.backgroundColor="#cecece"
    costs.style.color="black"

    news_card.style.display="none"
    costs_card.style.display="none"
       if(outerWidth<768){
        sells_card.style.display="block"
       }
       else{
        sells_card.style.display="flex"
        sells_card.style.flexWrap="warp"
       }

     
     

 }
 function cost(){
    const news=document.getElementById('New')
    const sells=document.getElementById('Sell')
    const costs=document.getElementById('Cost')
    const news_card=document.getElementById('card_New')
    const sells_card=document.getElementById('card_Sell')
    const costs_card=document.getElementById('card_Cost')

    news.style.backgroundColor="#cecece"
    news.style.color="black"

    sells.style.backgroundColor="#cecece"
    sells.style.color="black"

    costs.style.backgroundColor="#dc3545"
    costs.style.color="white"

    news_card.style.display="none"
    sells_card.style.display="none"
       if(outerWidth<768){
        costs_card.style.display="block"
       }
       else{
        costs_card.style.display="flex"
        costs_card.style.flexWrap="warp"
       }


 }
 
 import { useCartStore } from '../stores/cart';
 const store=useCartStore()
 
 function add1(New_kalas){
    store.Add(New_kalas)
 }

 function add2(Sell_kalas){
    store.Add(Sell_kalas)
 }

 function add3(Cost_kalas){
    store.Add(Cost_kalas)
 }

 
 
</script>

<style scoped>


  .cards{
    margin-top: 5rem;
    transform: translate(0%);
    animation-name: move;
    animation-duration:3s;
    
  }

  @keyframes move {

    0%{
      transform: translateX(100%);
    }
  }
  .center{
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  
  .card-text2{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #card_Sell{
    display: none;
  }
  #card_Cost{
    display: none;
  }
  .card-text2 h5{
    color: #dc3545;
  }
  .button{
    text-align: center;
  }
  .button .btn{
  background-color: #cecece;
  padding: .7rem;
}
.button .btn:hover{
  background-color: #dc3545;
  color: white;
}

.card .card-img-top:hover{
   transform: scale(.9);
   transition: .7s;
}
@media screen and (min-width: 768px){
    .cards{
      display: flex;
      flex-wrap: wrap;
    }
    .center{
      flex: 0 0 50%;
    }
   

}
@media screen and (min-width: 1200px){
  .cards{
      display: flex;
    }
    .center{
      flex: 0 0 25%;
    }
    .button{
    text-align:right;
    margin-right: 3rem;
  }
}
</style>