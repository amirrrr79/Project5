<template>
  <div v-if="product.length">
        <table class="table table-hover table-striped  border bg-white col-lg-12 pl-3 pt-3">
            <thead>
              <tr>
                <th>محصول</th>
                <th class="" style="width: 10%">قیمت</th>
                <th style="width: 25%">تعداد</th>
                <th>جمع</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="products in product" in :key="products.id">
                <td class="align-middle">
                  <div class="row">
                    <div class="col-lg-2">
                      <img :src="products.image" alt="..." class="img-fluid w-img" />
                    </div>
                    <div class="col-lg-10">
                      <p>{{ products.text }}</p>
                    </div>
                  </div>
                </td>
                <td class="align-middle">{{ products.price }}</td>
                <td class="align-middle">
                    <button
                  @click="increment(products)"
                  class="btn btn-sm btn-danger ms-2"
                >
                  +
                </button>
                  <span>{{products.quantity }}</span>
                  <button
                  @click="decrement(products)"
                  class="btn btn-sm btn-danger me-2"
                >
                  -
                </button>
                 
                </td>
                <td class="align-middle">{{ products.price * products.quantity }}</td>
                <td class="align-middle" style="width: 15%">
                    <button
                      @click="removeFromCart(products)"
                      class="btn btn-danger btn-sm">
                        حذف
                </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <a href="#" class="btn btn-success btn-block" @click="End()">پرداخت</a>
                </td>
                <td colspan="2" class="hidden-xs"></td>
                <td class="hidden-xs text-center" style="width: 15%">
                  <strong>قیمت نهایی:{{ Total }}</strong>
                </td>
                <td>
                    <button @click="clear()" class="btn btn-danger">
                      حذف همه
                   </button>
                </td>
              </tr>
            </tfoot>
          </table>
  </div>
    <div v-else class="style">
    <i class="bi bi-basket2 size"></i>
      <h5 class="text">سبد خرید خالی است</h5>
  </div>

</template>
<script setup>
import Swal from 'sweetalert2'
 import { useCartStore } from '../stores/cart';
// definePageMeta({middleware:'middle'})
const {User}=use();
 const store=useCartStore()
 const product=computed(()=> store.ItemProcuct)
 const Total=computed(()=> store.total)


 function increment(products){
    store.increment(products)
 }

 function decrement(products){
    store.decrement(products)
 }

 function removeFromCart(products){
   store.remove(products)
 }

 function clear(){
  store.clear()
 }

 function End(){
  if(User.value){
    store.payment()
  }
  else{
    Swal.fire({
            text: "لطفا ابتدا وارد حساب خود شوید",
            icon: "error",
            background:'#dc3545',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
        });
        return navigateTo('/login')
  }
 }

</script>

<style scoped>
.style{
  text-align: center;
  margin-top: 7rem;
  margin-bottom: 7rem;
}
.size{
  font-size: 6rem;
  color: #dc3545;
}
 table{
  margin-top: 15rem;
  margin-bottom: 15rem;
 width: 90%;
 text-align: center;
 margin-right: 1.3rem;
}
.w-img{
   width: 100%;
   margin-bottom: 1rem;
}
 
@media screen and (min-width: 830px){
  .style{
  text-align: center;
  margin-top: 15rem;
  margin-bottom: 12rem;
}
.size{
  font-size: 8rem;
  color: #dc3545;
}
  table{
  margin-top: 15rem;
  margin-bottom: 15rem;
 width: 90%;
 text-align: center;
 margin-right: 2.2rem;
}
.w-img{
   width: 30%;
   margin-bottom: 1rem;
}
 }
 @media screen and (min-width: 992px){
  table{
  margin-top: 15rem;
 width: 90%;
 text-align: center;
 margin-right: 4.5rem;
}
.w-img{
   width: 500%;
}
 }


</style>