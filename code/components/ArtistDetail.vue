<template>
  <section class="artist-panel section full-height" v-if="ActiveArtistId">
    <b-container class="full-height" fluid>
      <b-row class="text-center full-height">
        <b-col class="artist-info" lg="6" md="12">
          <button @click="$store.commit('changueArtist', 0)" type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="align-middle">
            <h1 class="artist-name">{{ActiveArtist.nombre}}</h1>
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">Origen</th>
                    <td>{{ActiveArtist.origen}}</td>
                  </tr>
                  <tr>
                    <th scope="row">Genero</th>
                    <td>{{ActiveArtist.genero}}</td>
                  </tr>
                </tbody>
              </table>
        </div>
        </b-col>
        <b-col class="artist-container-image" lg="6" md="12">
          <div class="cover">
            <b-img class="artist-image" fluid src="http://placehold.it/500x500"/>
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
  display: grid;
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
  height: 100%;
}
.artist-container-image{
  overflow: hidden;
}
.artist-image{
  height: 100%;
  width: 100%;
object-fit: cover;
}
.cover{
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.full-height{
  height: 100% !important;
}
</style>
