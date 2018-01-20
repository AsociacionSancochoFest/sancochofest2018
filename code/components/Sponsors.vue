<template>
  <section class="seccion">
    <b-container>
      <h2 class="section-title">
      Sponsors
      </h2>
      <b-row class="text-center">
        <b-col lg="12" md="12">
          <b-container>
            <b-row justify-content-md-center>
              <b-col class="" lg="2" v-for="sponsor in AllSponsors" :key="sponsor.id">
                <a>
                  <img :src="sponsor.img" />
                </a>
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
      'AllSponsors'
    ])
  }
}
</script>
<style>
</style>
