<template>
  <section id="lineup" class="section">
    <b-container>
      <b-row>
        <div class="col align-self-center">
        <h2 class="section-title">
          LineUp
        </h2>
        </div>
      </b-row>
      <b-row class="text-center">
        <b-col lg="12" md="12">
          <b-container>
            <b-row justify-content-md-center>
              <b-col class="artist-link-container" lg="4" sm="12" v-for="artist in AllLineUp" :key="artist.id">
                <a @click="$store.commit('changueArtist', artist.id)" class="artist-link">{{artist.nombre}}</a>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
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
#lineup{
  background: #00aba7;
  color: #fff !important;
  height: auto !important;
  padding-bottom: 4em;

}
.section-title{
  font-size: 3.2em;
  padding: 2em 0;
  margin: 0 auto !important;
  text-align: center;
  text-transform: uppercase;
}
.artist-link-container{
    margin: 1.5em 0;
}
.section {
  width: 100%;
  background: #eee;
  min-height: 100vh;
  border:0;
}

@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .section {
      height: auto !important;
    }
}


.artist-link{
  font-size: 1.7em;
  cursor: pointer !important;
  text-transform: uppercase;
  transition: all .5s;
  cursor: pointer;
}
.artist-link:hover{
  color: #f8e71ce6 !important;
}
</style>
