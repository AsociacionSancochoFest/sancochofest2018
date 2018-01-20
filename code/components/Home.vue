<template>
  <section id="home" class="seccion">
    <b-container>
      <b-row class="align-items-center text-center">
        <b-col lg="6" md="6">
        </b-col>
        <b-col class="text-left" lg="6" md="6">
          <div class="align-middle">
            <h6>#VAMOSPALSANCOCHO</h6>
            <h1>SANCOCHO FEST 2018</h1>
            <h5>Festival Multiartistico y Multicultural comprometido con el medio ambiente,ESCUELA DEL SANCOCHO, TEATRO, MUSICA, BAZAR DE ARTISTAS</h5>
            <h3>ENTRADA LIBRE Y GRATUITA</h3>
          </div>
        </b-col>
      </b-row">
    </b-container>
  </section>
</template>
<script>
export default {}
</script>
<style>
#home{
  background: #4F309A !important;
  color: #fff !important;
  background-image: url('../assets/images/fondo.png') !important;
  background-size: cover;
  background-repeat: no-repeat !important;
  background-position: left;
}
.seccion{
  width: 100%;
  /*background: #eee;*/
  height: 100vh;
  border:0;
}
.center-vertical{
  position: relative;
}
#banner{
  bottom: 10%;
}

#home div {
 height: 100%;
}

.align-middle{
  position: relative;
  top: 50%;
}

</style>
