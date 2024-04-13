<template>
    <div class="section">
        <div class="information">
            <div class="title">
                <h4>اطلاعات شخصی</h4>
            </div>
            <table class="table table-bordered mt-5">
  
                <tbody>
         
                    <tr>
                       <th scope="row" style="background-color:#eee">نام</th>
                       <td>{{ User?.name }}</td>
      
                    </tr>
                     <tr>
                          <th scope="row" style="background-color:#eee">ایمیل</th>
                          <td>{{ User?.email }}</td>
      
                    </tr>
                    
                </tbody>
         </table>
        </div>

       
    </div>
</template>
<script setup>
   const {User}=use();

   

</script>

<style scoped>
 .information{
    margin-top: 5rem;
    margin-bottom: 5rem;
    margin-left: 2rem;
    margin-right: 2rem;
 }
 .tables{
    margin-left: 2rem;
    margin-right: 2rem;
 }
 .title{
    border-bottom: 2px solid black;
    text-align: center;
    margin-left: 5rem;
    margin-right: 5rem;
 }

 @media screen and (min-width: 830px){

    .information{
    margin-top: 12rem;
    margin-bottom: 5rem;
    margin-left: 5rem;
    margin-right: 5rem;
 }
 .tables{
    margin-left: 5rem;
    margin-right: 5rem;
 }
 .title{
    border-bottom: 2px solid black;
    text-align: center;
    margin-left: 8rem;
    margin-right: 8rem;
 }
 }
 @media screen and (min-width: 1200px){

    .information{
    margin-top: 12rem;
    margin-bottom: 5rem;
    margin-left: 15rem;
    margin-right: 15rem;
 }
 .tables{
    margin-left: 15rem;
    margin-right: 15rem;
 }
 .title{
    border-bottom: 2px solid black;
    text-align: center;
    margin-left: 8rem;
    margin-right: 8rem;
 }
}

</style>