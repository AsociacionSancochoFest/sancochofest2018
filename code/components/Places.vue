<template>
  <section id="espacios">
    <b-container fluid>
        <b-row>
          <b-col class="no-padding" lg="12" md="12">
            <h2 class="header-spaces">
              ESPACIOS
            </h2>
            <gmap-map
          :center="center"
          :zoom="15"
          style="width: 100%; height: 500px"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="false"
            :draggable="false"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>
          </b-col>
        </b-row>

    </b-container>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
// apikey='AIzaSyBR8tGeFxih602ObAGGVf_x80-Nj0UKr0I'
export default {
  data () {
    return {
      center: {lat: 4.09201401, lng: -76.19554996},
      markers: [{
        position: {lat: 4.0861805, lng: -76.1967846}
      }, {
        position: {lat: 4.0823776, lng: -76.1991086}
      }, {
        position: {lat: 4.095238, lng: -76.186624}
      }]
    }
  },
  computed: {
    ...mapGetters([
      'AllEditions'
    ])
  }
}
</script>
<style>
.no-padding{
  padding: 0 !important;
}

.header-spaces{
    position: absolute;
    z-index: 1000;
    top: 6%;
    left: 0;
    background: #e41e45;
    padding: 15px 86px;
    color: #fff;
    font-size: 2.5em;
}

@media only screen and (max-width: 768px) {
.header-spaces{
  top:-2% !important;
}

}



</style>
