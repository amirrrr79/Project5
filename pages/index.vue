<template>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <div class="search">
    <input class="form-control me-2 input ms-2" type="search" placeholder="دنبال چی میگردی؟" aria-label="Search">
      <button class="btn btn-danger" type="submit">جستجو</button>
  </div>
  <div class="carousel">
    <carousel />
  </div>

  <div class="baner">
    <img src="/image/img2.jpg" class="photo mb-3">
    <img src="/image/img11.jpg" class="photo">
  </div>

  <div class="logos">
    <div class="logo">
      <img src="/image/img7.png" style="background-color:#ececec;padding: 1rem;border-radius: 30px;border:1px solid #808080 ">
      <div class="text">
        <h5>حمل ونقل سریع</h5>
      <p>ارسال به سراسر ایران</p>
      </div>
    </div>

    <div class="logo">
      <img src="/image/img8.png" style="background-color:#ececec;padding: 1rem;border-radius: 30px;border:1px solid #808080 ">
      <div class="text">
        <h5>پرداخت ایمن و سریع</h5>
      <p>سازگار بادرگاه پرداخت های معروف</p>
      </div>
    </div>

    <div class="logo">
      <img src="/image/img9.png" style="background-color:#ececec;padding: 1rem;border-radius: 30px;border:1px solid #808080 ">
      <div class="text">
        <h5>پشتیبانی حرفه ای</h5>
      <p>پشتیبانی 24 ساعته با کادر مجرب</p>
      </div>
    </div>

    <div class="logo">
      <img src="/image/img10.png" style="background-color:#ececec;padding: 1rem;border-radius: 30px;border:1px solid #808080 ">
      <div class="text">
        <h5>گارانتی عودت وجه</h5>
      <p>تا 30 روز پس از خرید محصول</p>
      </div>
    </div>
     
  </div>

  <div class="logos2">
     <div class="title">
       <h3>محصولات</h3>
     </div>
     <div class="centers">
       <div class="logo2">
        <NuxtLink to="/mobile"><img src="/image/img15.png" class="photo2"></NuxtLink>
        <p>موبایل</p>
       </div>

       <div class="logo2">
        <NuxtLink to="/lavazem"><img src="/image/img16.png" class="photo2"></NuxtLink>
        <p>لوازم جانبی</p>
       </div>

       <div class="logo2">
        <NuxtLink to="/laptop"><img src="/image/img17.png" class="photo2"></NuxtLink>
        <p>لپ تاپ</p>
       </div>

       <div class="logo2">
        <NuxtLink to="/Console"><img src="/image/img18.png" class="photo2"></NuxtLink>
        <p>کنسول بازی</p>
       </div>
     </div>

  </div>

  <div class="cards">
     
    <card />

  </div>
 
</template>

<script setup>



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
 .logo2{
  transform: translate(0%);
  animation-name: move;
  animation-duration: 2s;
 }
 @keyframes move{
  0%{
    transform: translateY(100%);
  }
 }
 @media screen and (min-width: 768px){
  .search{
  display: flex;
  justify-content: center;
  margin-top: 9rem;
 }
 .input{
  width: 50%;
  height: 60px;
 }
 }

 .carousel{
  margin-top: 3rem;
 }

 .baner{
  margin-top:5rem;
  text-align: center;
 }
 .photo{
  border-radius: 1rem;
  width: 80%;
  height: 250px;
 }
 @media screen and (min-width: 768px){
  .baner{
  margin-top:5rem;
   display: flex;
   justify-content:center;
 }
 .photo{
  width: 40%;
  height: 250px;
  margin-right: 1rem;

 }
 }
 .logos{
  margin-top:4rem;
  margin-right: 2rem;
 }
 .text{
  margin-right: .5rem;
  margin-top: .5rem;
 }
 @media screen and (min-width: 678px){
   .logos{
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin-right: 5.5rem;
    
   }
   
  }
  @media screen and (min-width: 768px){
   .logos{
   
    margin-right: 7rem;
    
   }
   
  }
  @media screen and (min-width: 900px){
   .logos{
   
    margin-right: 9rem;
    
   }
   
  }

   @media screen and (min-width: 1200px){
   .logos{
    display: flex;
    justify-content: space-around;
    margin-right: 0;
    margin-top:6rem;
    
   }   
  
 }

 .logos2{
  margin-top: 5rem;
  text-align: center;
 }
  .title{
    border-bottom: 2px solid black;
    margin-left: 6rem;
    margin-right: 6rem;
  }
 .photo2{
    width: 50%;
    margin-top: 3rem;
 }
.logo2 p{
   font-size: 1.5rem;
}
.logo2 img:hover{
    transform: scale(1.1);
    transition: .7s;
}

@media screen and (min-width: 678px){
   .photo2{
    width: 40%;
   }
}
@media screen and (min-width: 768px){
  .centers{
    display: flex;
    flex-wrap: wrap;
  }
  .title{
    margin-left: 8rem;
    margin-right: 8rem;
  }
  .logo2{
    flex:0 0 50%
  }
  .photo2{
    width: 50%;
  }
}
@media screen and (min-width: 1200px){
  .centers{
    display: flex;
  }
  .logo2{
    flex:0 0 25%
  }
  .title{
    margin-left: 19rem;
    margin-right: 18rem;
  }
  .photo2{
    width: 60%;
  }

}
.cards{
  margin-top: 7rem;
}


</style>