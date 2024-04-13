<template>
  
    <div class="c">
 
    
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/image/img4.jpg" width="100%" class="photo3"   alt="...">
    </div>
    <div class="carousel-item">
      <img src="/image/img5.jpg" width="100%" class="photo3" alt="...">
    </div>
    <div class="carousel-item">
      <img src="/image/img6.jpg" width="100%" class="photo3" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
</template>

<script>

</script>

<style scoped>
  .carousel{
    width: 96%;
   margin-right: .5rem;
  }
  .photo3{
    height: 250px;
  }
  @media screen and (min-width: 768px){
    .carousel{
    width: 93%;
    margin-right: 1.5rem;
  }
  
  }
  @media screen and (min-width: 800px){
    .carousel{
    width: 93%;
    margin-right: 2rem;
  }
  
  }
  @media screen and (min-width: 1500px){
    .carousel{
    width: 93%;
    margin-right: 
    3rem;
  }
  .photo3{
    height: 350px;
  }
  
  }
</style>