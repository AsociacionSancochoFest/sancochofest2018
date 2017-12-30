<template>
  <section class="section">
    <b-container>
      <b-row justify-content-md-center>
        <div class="col-md-auto">
        <h2>
          #LineUp
        </h2>
        </div>
      </b-row>
      <b-row class="text-center">
        <b-col lg="12" md="12">
          <b-container>
            <b-row justify-content-md-center>
              <b-col class="artist-link-container" lg="4" v-for="artist in AllLineUp" :key="artist.id">
                <a @click="$store.commit('changueArtist', artist.id)" class="artist-link">{{artist.nombre}}</a>
              </b-col>
            </b-row>
          </b-container>
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
      'AllLineUp'
    ])
  }
}
</script>
<style>
.artist-link-container{
    margin: 1.5em 0;
}
.section {
  width: 100%;
  background: #eee;
  min-height: 100vh;
  border:0;
}
.artist-link{
  font-size: 1.5em;

  margin: 2em
}
</style>
