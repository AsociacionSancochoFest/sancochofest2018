<template>
  <section class="seccion">
    <b-container>
      <b-row class="text-center">
        <b-col lg="6" md="6">
          <h1 id="banner" class="center-vertical">Sancocho fest 2018</h1>
        </b-col>
        <b-col lg="6" md="6">
          <img id="banner-img" class="center-vertical" src="http://placehold.it/500x500" alt="logo"/>
        </b-col>
      </b-row">
    </b-container>
  </section>
</template>
<script>
export default {}
</script>
<style>
.seccion{
  width: 100%;
  background: #eee;
  height: 100vh;
  border:0;
  line-height: 200px;
}
.center-vertical{
  position: relative;
}
#banner{
  top:50%;
}
#banner-img{
  top:80%;
}
</style>
