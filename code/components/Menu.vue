<template>
  <b-navbar
    type="dark"
    toggleable="md"
    variant="info"
    sticky=true
    v-bind:class="[ scrolled ? 'protect-text' : 'transparente']"
    v-on:scroll="handleScroll">
    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand class="small-logo" href="#" >
        <span v-if="scrolled" >Sancoho logo</span>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#lineup">Line Up</b-nav-item>
          <!--<b-nav-item href="#somos">Somos</b-nav-item>-->
          <b-nav-item href="#sponsors">Sponsors</b-nav-item>
          <b-nav-item href="#espacios">Espacios</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<script>
export default {
  data () {
    return {
      scrolled: false
    }
  },
  methods: {
    handleScroll () {
    //  this.scrolled = window.scrollY > 0
    }
  },
  beforeMount () {
    document.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style>
.small-logo{
  transition: all .5;
}
body{
  font-family: 'Poppins', sans-serif;
}
.transparente {
  background: rgba(0, 0, 0, 0) !important;
  text-align: center;

}

@media only screen and (max-width: 768px) {
  .transparente{
    background: #4f309a !important;
    height: 100% !important;
    font-size: 2em;
  }

  text-align: center;
font-size: 2em;

}



.protect-text {
  background: #4F309A !important;
}

.navbar{
  margin-bottom: -60px;
}

.nav-item{
  margin: 0 1em;
}

.nav-link{
    color: #fff !important;
    border-bottom: 3px transparent solid;
    transition: all .5s;
}

.nav-link:hover{
    border-bottom: 3px yellow solid;
}
</style>
