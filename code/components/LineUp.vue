<template>
  <section class="section">
    <b-container>
      <h1>LINE UP</h1>
      <b-row class="text-center">
        <b-col lg="12" md="12">
          <b-container>
            <b-row>
              <b-col lg="2" v-for="artist in AllLineUp" :key="artist.id">
                <a class="artist-link" href="#">{{artist.nombre}}</a>
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
.section {
  width: 100%;
  background: #eee;
  height: 100vh;
  border:0;
}
.artist-link{
  font-size: 1.5em;

  margin: 2em
}
</style>
