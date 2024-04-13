<template>
  <footer class="footer">
    <div class="center_footer">
     <div class="colum">
        <h5>اطلاعات</h5>
        <ul class="ul_footer">
            <li class="li_footer"><a href="">تماس با ما</a></li>
            <li class="li_footer"><a href="">درباره ما</a></li>
            <li class="li_footer"><a href="">راهنمای فروش</a></li>
            <li class="li_footer"><a href="">خرید قسطی</a></li>
        </ul>
     </div>

     <div class="colum">
        <h5>دسته بندی</h5>
        <ul class="ul_footer">
            <li class="li_footer"><a href="">گوشی قسطی</a></li>
            <li class="li_footer"><a href="">لپ تاپ قسطی</a></li>
            <li class="li_footer"><a href="">خرید قسطی ps5</a></li>
            <li class="li_footer"><a href="">خرید قسطی آیفون</a></li>
        </ul>
     </div>

     <div class="colum">
        <h5>خدمات مشتریان</h5>
        <ul class="ul_footer">
            <li class="li_footer"><a href="">پشتیبانی 24 ساعته</a></li>
            <li class="li_footer"><a href="">پرسش و پاسخ</a></li>
            <li class="li_footer"><a href="">روند ارسال سفارش</a></li>
            <li class="li_footer"><a href="">فروش ویژه</a></li>
        </ul>
     </div>

     <div class="colum colum_self">
            <p class="font"><i class="bi bi-apple ms-2 fs"></i>AppStore</p>
             <ul class="ul_text mb-5">
               <li>تلفن پشتیبانی: ۰۲۱ -۴۳۹۰۰۰۰۰</li>
               <li>دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم، بن‌بست گل‌ها، پلاک 11</li>
             </ul>
             <div class="logos">
                <a class="logo" href=""><i class="bi bi-telegram"></i></a>
                <a class="logo" href=""><i class="bi bi-instagram"></i></a>
                <a class="logo" href=""><i class="bi bi-whatsapp"></i></a>
                <a class="logo" href=""><i class="bi bi-twitter"></i></a>
           </div>
     </div>
    </div>

    <div class="text_footer">
        <p>کلیه حقوق این وبسایت متعلق به این شرکت میباشد و هرگونه کپی برداری پیگرد قانونی دارد.</p>
    </div>

  </footer>
</template>

<script setup>

</script>

<style scoped>
 .footer{
    margin-top:5rem;
    background-color: #585858;
 }
 .center_footer{
    text-align: center;
 }
 .fs{
    font-size: 5rem;
    color: red;
 }
 .font{
    font-size: 2rem;
    color: white;
 }
.colum{
    padding-top: 2rem;
}
.logos{
    font-size: 2rem;
}
.logos a{
    color: rgb(157, 157, 157);
    margin-left: 1rem;
}
.logos a:hover{
    color: white;
    transition: .7s;
}
.li_footer{
    margin-top: 1rem;
}
.li_footer a{
    color:rgb(157, 157, 157)
}
.li_footer a:hover{
    color: white;
    transition: .7s;
}
.colum h5{
    color: white;
}
.ul_text{
    color:rgb(157, 157, 157)
}
.text_footer{
    margin-top: 4rem;
    text-align: center;
    border-top: 1px solid white ;
    margin-left: 2rem;
    margin-right: 2rem;
    color:white 
}
.text_footer p{
    padding-top: 2rem;
    margin-bottom: 0;
}
@media screen and (min-width: 678px){
    .center_footer{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .colum{
        flex: 0 0 50%;
    }
    .text_footer{
        margin-left: 4rem;
        margin-right: 4rem;
    }
}
@media screen and (min-width: 1200px){
   
    .center_footer{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .colum{
        flex: 0 0 23%;
    }
    .text_footer{
        margin-left: 6rem;
        margin-right: 6rem;
    }
   .colum{
    padding-top: .5rem;
   }
   .colum_self{
    margin-top: 3rem;
   }
}
</style>