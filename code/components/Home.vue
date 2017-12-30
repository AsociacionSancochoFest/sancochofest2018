<template>
  <section class="seccion">
    <b-container>
      <b-row class="text-center">
        <b-col class="text-left float-left" lg="6" md="6">
          <h5 id="banner" class="center-vertical">#VAMOSPALSANCOCHO</h5>
          <h2 id="banner" class="center-vertical">SANCOCHO FEST 2018</h2>
          <h3 id="banner" class="center-vertical">TULUA 1.2.3 DE FEBRERO 2018</h3>
          <h5 id="banner" class="center-vertical">Festival Multiartistico y Multicultural comprometido con el medio ambiente</h5>
          <h4 id="banner" class="center-vertical">ENTRADA LIBRE</h4>
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
