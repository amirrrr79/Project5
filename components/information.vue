<template>
    <div class="">
        <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item pt-3" >
        <a class="nav-link active pt-2 pb-2" id="nav1" aria-current="true" href="#" @click.prevent="nav1()">توضیحات</a>
      </li>
      <li class="nav-item pt-3" >
        <a class="nav-link pt-2 pb-2" id="nav2"  href="#" @click.prevent="nav2()">اطلاعات بیشتر</a>
      </li>
      
    </ul>
  </div>

  <div class="card-body">

    <div class="discribe">
      <p class="card-text">همواره گوشی‌های هوشمند میان‌رده سری A سامسونگ توانسته‌اند با بهره بردن از مشخصات فنی مناسب و قیمتی مقرون به‌صرفه، عملکرد خوبی داشته باشند و گوشی موبایل سامسونگ مدل Galaxy A34 یکی از میان‌رده‌های این شرکت است که با توجه به قیمت در نظر گرفته شده و البته مشخصات فنی قدرتمند، ارزش خرید بسیار بالایی دارد. در نمای روبه‌رویی سامسونگ از طراحی ناچ واتردراپ برای قرارگیری دوربین سلفی استفاده کرده و شاید بهتر بود طراحی جدید‌تر در نظر گرفته می‌شد تا حاشیه‌ها به حداقل میزان ممکن می‌رسیدند. در مجموع 84.9 درصد از نمای روبه‌رویی را صفحه‎‌نمایش به خودش اختصاص داده و در حین استفاده چندان زیاد حاشیه‌ها به چشم نمی‌آیند. اما باز هم تکرار می‌کنیم که بهتر بود حاشیه‌های کمتری برای این صفحه‌نمایش در نظر گرفته می‌شد.</p>
    </div>

    <div class="border-info">
   <div class="border bg-light">
    <h5 class="pt-3">نوع پردازنده:</h5>
    <p>Exynos 2200 (4 نانومتری)</p>
   </div>

   <div class="border bg-light">
    <h5 class="pt-3">فرکانس پردازنده مرکزی :</h5>
    <p>یک هسته 2.8 گیگاهرتز Cortex-X2 و 3 هسته 2.50 گیگاهرتز Cortex-A710 و 4 هسته 1.8 گیگاهرتز Cortex-A510</p>
   </div>

   <div class="border bg-light">
    <h5 class="pt-3">تعداد سیم کارت :</h5>
    <p>دو سیم کارت نانو سیم (همزمان فعال )</p>
   </div>

   <div class="border bg-light ">
    <h5 class="pt-3">حافظه داخلی :</h5>
    <p>256 گیگابایت</p>
   </div>

   <div class="border bg-light">
    <h5 class="pt-3">کیفیت دوربین :</h5>
    <p>دوربین سه گانه 50 مگاپیکسل + 8 مگاپیکسل + 12 مگاپیکسل</p>
   </div>

   <div class="border bg-light">
    <h5 class="pt-3">حافظه RAM :</h5>
    <p>8 گیگابایت</p>
   </div>
    </div>
  </div>
</div>
    </div>
</template>
<script setup>
function nav1(){
    const btn2=document.getElementById('nav2')
    const btn1=document.getElementById('nav1')
    const info=document.querySelector('.border-info')
    const text=document.querySelector('.discribe')
     btn2.classList.remove('active')
     btn1.classList.add('active')
     info.style.display="none"
     text.style.display="block"


}
  function nav2(){
    const btn2=document.getElementById('nav2')
    const btn1=document.getElementById('nav1')
    const info=document.querySelector('.border-info')
    const text=document.querySelector('.discribe')
     btn2.classList.add('active')
     btn1.classList.remove('active')
     info.style.display="block"
     text.style.display="none"

  }
</script>
<style scoped>

.nav-link{
    color: black;
}
  .card-text{
    text-align: right;
  }
  .card{
    margin-right: 2rem;
    margin-left: 2rem;
  }
  .border{
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
  .border-info{
    margin-left: 2rem;
    margin-right: 2rem;
    display: none;
  }
  .color{
    background-color:#E0F4FF;
  }
  .card-text{
    font-size: 1rem;
  }
  @media screen and (min-width: 1200px){
        .border-info{
    margin-top: 3rem;
    margin-left: 15rem;
    margin-right: 15rem;
    
  }
  .card{
    margin-right: 5rem;
    margin-left: 5rem;
  }
  }

</style>