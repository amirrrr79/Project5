import Swal from 'sweetalert2'
import { defineStore } from 'pinia'



export const useCartStore = defineStore('cart', {
  state: () => {
    return {
              cart:[]
          }
  },
  getters:{
    ItemProcuct(state){
        return state.cart
    },
    count(state){
        return state.cart.length
    },
    total(state){
        return state.cart.reduce((pre,nex)=>{
            return pre + nex.price*nex.quantity
        },0)
    }
  },
  actions: {

    Add(product){
        const item = this.cart.find(p => p.id == product.id)

        if(!item){
            this.cart.push({
                ...product,
                quantity: 1
            })
        }
        else{
            item.quantity++
        }
        Swal.fire({
            text: "محصول به سبد خرید شما اضافه شد",
            icon: "info",
            background:'orange',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
        });

    },
    logout(){
        this.cart=[]
            Swal.fire({
                    text: "شمااز حساب کاربری خود خارج شدید",
                    icon: "success",
                    background:'green',
                    iconColor:'white',
                    color:'white',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 3000,
                    toast: true,
                    position: 'top-right',
                });
    },

    increment(products){
        const item = this.cart.find(p => p.id ==products.id)

        if(item){
            item.quantity++
        }

    },

    decrement(products){
        const item = this.cart.find(p => p.id ==products.id)

        if(item){
            if(item.quantity>1){

                item.quantity--
            }
        }

    },

    remove(products){
       this.cart =this.cart.filter(cart=> cart.id!=products.id)
    },

    clear(){
        this.cart=[]
    },

    payment(){
        Swal.fire({
            title: 'خرید شما با موفقیت انجام شد',
            text: 'کد رهگیری خرید شما : 317541',
            icon: 'success',
       });
    }


      

  },
})