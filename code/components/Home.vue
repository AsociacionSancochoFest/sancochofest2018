<template>
  <section id="home" class="seccion">
    <b-container>
      <b-row class="align-items-center text-center">
        <b-col lg="6" md="6" sm="12">
        </b-col>
        <b-col class="text-left" lg="6" md="6" sm="12">
          <div class="banner align-middle">
            <img class="img-fluid" src="images/logo.png" />
            <h5>Festival Multiartistico y Multicultural comprometido con el medio ambiente.
                ESCUELA DEL SANCOCHO, TEATRO, MUSICA, FOTOGRAFIA, BAZAR DE ARTISTAS. #VAMOSPALSANCOCHO</h5>
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
.banner * {
  margin: 1em 0;
}

#home{
  background: #4F309A !important;
  color: #fff !important;
  background-image: url('../static/images/fondo.png') !important;
  /*background-size: cover;*/
  background-repeat: no-repeat !important;
  background-position: left;
  background-size: auto 120% !important;
}
.seccion{
  width: 100%;
  /*background: #eee;*/
  height: 100vh ;
  border:0;
}
.center-vertical{
  position: relative;
}
#banner{
  bottom: 20%;
}

#home div {
 height: 100%;
}

@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    #home div {
     height: auto;
    }
    .align-middle{
      position: relative !important;
      margin-top: 30% !important;
    }

    #home{
      background: #4F309A !important;
      background-image: none;
    }
}

.align-middle{
  position: relative;
  top: 30%;
}

</style>
