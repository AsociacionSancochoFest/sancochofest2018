<template>
    <div>
      <Menu/>
      <Home/>
      <LineUp/>
      <Places/>
      <!-- <History/> -->
      <ArtistDetail/>
      <Sponsors/>
      <!--<Footer/> -->
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
import Places from '~/components/Places.vue'
// import Footer from '~/components/Footer.vue'

export default {
  components: {
    Logo,
    Home,
    Menu,
    LineUp,
    History,
    ArtistDetail,
    Sponsors,
    // Footer,
    Places
  }
}
</script>

<style>
h1,h2,h3,h4{
    font-weight: bold;
}

html, body{
  background: #fff !important;
  font-family: Comfortaa !important;
  overflow-x: hidden;
}

@font-face {
      font-family: ComfortaaBold;
    src: url(../static/Comfortaa-Bold.ttf);
}

@font-face {
    font-family: Comfortaa;
    src: url(../static/Comfortaa-Regular.ttf);
}


.navbar-dark .navbar-toggler-icon {

    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");

}
.navbar-dark .navbar-toggler {

    color: hsl(0, 0%, 100%);
    border-color: hsl(0, 0%, 100%);

}

</style>
