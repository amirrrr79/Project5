<template> 
     <div class="section">
       <div class="image">
          <img :src=" route.params.image" class="photo">
       </div>

       <div class="item">
            <h4 id="title">{{ route.params.text }}</h4>
            <ul class="ul">
              <li class="mb-2">فناوری صفحه نمایش:  Super AMOLED</li>
              <li class="mb-2">رزولوشن عکس:  48 مگاپیکسل</li>
              <li class="mb-2">نسخه سیستم عامل: Android 13</li>
              <li>ابعاد: ۸.۲×۷۸.۱×۱۶۱.۳ میلی‌متر</li>
            </ul>
            <p id="price" style="color:#dc3545;font-size: 1.5rem;">تومان{{ route.params.price }}</p>
            <a href="#" class="btn btn-danger mt-2 btn1" @click.prevent="Add()"><i class="bi bi-cart4  ms-2" style="color: white;"></i>افزودن به سبد</a>
       </div>
     </div>

     <div class="information">
        <information />
     </div>

     <div class="product">
      <div class="title">
        <h4>محصولات دیگر</h4>
      </div>
       <div class="cards">
        <div   class="center" v-for="(products,index) in product" :key="index">
   <div class="card" style="width: 18rem;">
  <NuxtLink :to="{name:'m.image.text.price', params:{ image:products.image,text:products.text,price:products.price}}" title="اطلاعات بیشتر"><img :src="products.image" class="card-img-top" alt="..."></NuxtLink>
  <div class="card-body">
    <p class="card-text mt-2 mb-4">{{ products.text }}</p>
    <div class="card-text2 ">
        <h5 class="price" style="color:#dc3545">تومان{{ products.price }}</h5>
        <a href="#" class="btn btn-danger" @click.prevent="AddProduct(products)"><i class="bi bi-cart4 ms-2" style="color: white;" ></i>افزودن</a>
    </div>
  </div>
</div>
</div>
       </div>
     </div>

</template>
<script setup>
import { useCartStore } from '../stores/cart';
const store=useCartStore()
const route=useRoute()

function Add(){
  store.Add(route.params)
     
}

function AddProduct(products){
  store.Add(products)
}

 
  const product=reactive([
    {
        id:14,
        image:'/image/img41.jpg',
        text:'گوشی موبایل آنر مدل X5 رم 2 ظرفیت 32 گیگابایت دو سیم کارت',
        price:550
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

</script>
<style scoped>
  .section{
    margin-top: 5rem;
    color:black;
    text-align: center;
  }
  .photo{
    width: 50%;
    height: 300px;

  }
  .image{
    margin-bottom: 3rem;
  }
  .ul{
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  .btn1{
    padding: 1rem;
    border-radius: 1rem;
  }
  .item{
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .information{
    margin-top: 2rem;
  }
  .cards{
    margin-top:5rem
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
  .card-text2 h5{
    color: #dc3545;
  }
  .title{
    text-align: center;
    border-bottom: 2px solid black;
    margin-left: 5rem;
    margin-right: 5rem;
  }
  .product{
    margin-top: 7rem;
  }
  .card .card-img-top:hover{
   transform: scale(.9);
   transition: .7s;
}
  @media screen and (min-width: 600px){
    .photo{
      width: 240px;
    }
  }
  @media screen and (min-width: 678px){
    .section{
      display: flex;
      align-items: center;
      margin-top: 5rem;
    }
    .image{
      flex: 70%;
    }
    .photo{
      width: 260px;
    }
    .item{
      text-align: right;
      margin-right: 3rem;
    }
  }
  @media screen and (min-width: 750px){
    .section{
      display: flex;
      align-items: center;
      margin-top: 12rem;
    }
    .cards{
      display: flex;
      flex-wrap: wrap;
    }
    .center{
      flex:0 0 50%;

    }
    .title{
    text-align: center;
    border-bottom: 2px solid black;
    margin-left: 12rem;
    margin-right: 12rem;
  }
  }
  @media screen and (min-width: 1200px){
    .section{
      display: flex;
      margin-top: 12rem;
    }
    .image{
      flex: 70%;
    }
    .photo{
      width: 320px;
      height: 400px;
    }
    .item{
      margin-left: 10rem;
    }
    .cards{
      display: flex;
      flex-wrap: wrap;
    }
    .center{
      flex:0 0 25%;

    }
    .title{
    text-align: center;
    border-bottom: 2px solid black;
    margin-left: 18rem;
    margin-right: 18rem;
  }
  }

</style>