<template>
    <div class="search">
     <input class="form-control me-2 input ms-2" type="search" placeholder="دنبال چی میگردی؟" aria-label="Search">
     <button class="btn btn-danger" type="submit">جستجو</button>
   </div>
   <div class="cards">
       <div class="center" v-for="(laptops,index) in laptop" :key="index">
         <div class="card" style="width: 18rem;">
           <NuxtLink :to="{name:'m.image.text.price', params:{ image:laptops.image,text:laptops.text,price:laptops.price}}" title="اطلاعات بیشتر"><img :src="laptops.image" class="card-img-top" alt="..."></NuxtLink>
          <div class="card-body">
          <p class="card-text mt-2 mb-4">{{ laptops.text }}</p>
          <div class="card-text2 ">
          <h5 class="price ms-2" style="color:#dc3545">تومان{{ laptops.price }}</h5>
          <a href="#" class="btn btn-danger"  @click.prevent="AddLaptop(laptops)"><i class="bi bi-cart4 ms-2" style="color: white;" ></i>افزودن</a>
         </div>
         </div>
       </div>
      </div>
   </div>

</template>

<script setup>
   import { useCartStore } from '../stores/cart';
 const store=useCartStore()
 
 function AddLaptop(laptops){
    store.Add(laptops)
 }

   
     const laptop=reactive([
   {
        id:6,
        image:'/image/img32.jpg',
        text:'لپ تاپ اچ پی مدل 255 G8',
        price:550
   },
   {
        id:19,
        image:'/image/img60.jpg',
        text:'خرید لپ تاپ لنوو مدل IdeaPad 3',
        price:456
        
   }
   ,
   {
        id:20,
        image:'/image/img61.jpg',
        text:'لپ تاپ ایسر مدل A315',
        price:860
   },
   {
        id:21,
        image:'/image/img62.jpg',
        text:'لپ تاپ ام اس آی مدل GF63 THIN 11SC',
        price:390
   },


   {
        id:22,
        image:'/image/img63.jpg',
        text:'لپ تاپ ایسوس مدل FX506HE',
        price:582
   },
   {
        id:23,
        image:'/image/img64.jpg',
        text:'لپ تاپ لنوو مدل Legion 5 Slim',
        price:469
   }
   ,
   {
       id:24,
       image:'/image/img65.jpg',
       text:'لپ تاپ ام اس آی مدل CYBORG15 A12UDX',
       price:365
   },
   {
       id:25,
       image:'/image/img66.jpg',
       text:'لپ تاپ لنوو مدل IdeaPad Gaming 3',
       price:850
   }
   ,
   {
       id:26,
       image:'/image/img68.jpg',
       text:'لپ تاپ لنوو مدل IdeaPad 3 Slim',
       price:700
   }
   ,
   {
       id:27,
       image:'/image/img68.jpg',
       text:'لپ تاپ اچ پی مدل Victus FB1013DX',
       price:655
   }
   ,
   {
       id:28,
       image:'/image/img69.jpg',
       text:'لپ تاپ ایسوس مدل X1502ZA',
       price:346
   },
   {
       id:29,
       image:'/image/img70.jpg',
       text:'لپ تاپ ایسوس مدل FA507RF',
       price:900
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