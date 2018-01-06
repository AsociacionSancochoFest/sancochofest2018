<template>
    <div>
      <Menu/>
      <Home/>
      <LineUp/>
      <History/>
      <ArtistDetail/>
      <Sponsors/>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Home from '~/components/Home.vue'
import Menu from '~/components/Menu.vue'
import LineUp from '~/components/LineUp.vue'
import History from '~/components/History.vue'
import ArtistDetail from '~/components/ArtistDetail.vue'
import Sponsors from '~/components/Sponsors.vue'

export default {
  components: {
    Logo,
    Home,
    Menu,
    LineUp,
    History,
    ArtistDetail,
    Sponsors
  }
}
</script>

<style>
html, body{
  background: #fff !important;
  font-family: Comfortaa !important;
}

@font-face {
    font-family: Comfortaa;
    src: url(../static/Comfortaa-Regular.ttf);
}
</style>
