import Swal from 'sweetalert2'

export default defineNuxtRouteMiddleware(() => {
    const { User } = use();

    if (!User.value) {
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
})