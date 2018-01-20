<template>
  <section class="seccion">
    <b-container>
      <h2 class="section-title">
      Sancochos Anteriores
      </h2>
        <b-row v-for="edition in AllEditions" :key="edition.id">
          <b-col lg="6" md="6">
              <h2><span class="align-middle">Sancocho 2017</span></h2>
          </b-col>
          <b-col v-bind:class="[edition.id % 2 === 0 ?  'order-first' : '']" lg="6" md="6">
            <div class="embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
            </div>
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
      'AllEditions'
    ])
  }
}
</script>
<style>
</style>
