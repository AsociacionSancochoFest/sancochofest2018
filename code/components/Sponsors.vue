<template>
  <section id="sponsors" class="seccion">
    <b-container>
      <h2 class="section-title">
      ORGAnizan y patrocinan
      </h2>
      <b-row class="text-center">
        <b-col lg="12" md="12">
          <b-container>
            <b-row justify-content-md-center>
              <b-col class="" sm="2" lg="2" v-for="sponsor in AllSponsors" :key="sponsor.id">
                <a>
                  <img class="img-fluid" :src="url(sponsor.img)" />
                </a>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
        <h2 class="section-title">
        Apoyan
        </h2>
        <b-row class="text-center">
          <b-col lg="12" md="12">
            <img class="img-fluid" src="~/static/images/apoyan.png" />
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
  },
  methods: {
    url: (file) => {
      return '/images/' + file
    }
  }
}
</script>
<style>
#sponsors{
  height: auto !important;
  padding-bottom: 4em;
}
</style>
