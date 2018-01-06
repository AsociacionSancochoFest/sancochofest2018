<template>
  <section class="artist-panel section" v-if="ActiveArtistId">
    <b-container fluid>
      <b-row class="text-center">
        <b-col class="artist-info" lg="6" md="12">
          <button @click="$store.commit('changueArtist', 0)" type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <p>
            <h1 class="artist-name">{{ActiveArtist.nombre}}</h1>
              <li>{{ActiveArtistId}}</li>
              <li></li>
              <li>{{ActiveArtist.origen}}</li>
              <li>{{ActiveArtist.genero}}</li>
              <li>f</li>
              <li>t</li>
              <li>i</li>

          </p>
        </b-col>
        <b-col class="artist-container-image" lg="6" md="12">
          <div>
            <img class="artist-image" src="http://placehold.it/500x500">/
          </div>
        </b-col>
      </b-row">
    </b-container>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'ActiveArtistId',
      'ActiveArtist'
    ])
  }
}
</script>
<style>
.artist-info{
  color: white;
}
.artist-name{
  text-transform: uppercase;
}
.section {
  width: 100%;
  background: #eee;
  height: 100vh;
  border:0;
}
.artist-panel{
  position: fixed;
  z-index:9999;
  top:0;
  background: rgba(5, 5, 5, 0.8) !important;
}
.artist-container-image{
  overflow: hidden;
}
.artist-image{
  width: 100%;

}
</style>
