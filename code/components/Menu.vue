<template>
  <b-navbar type="dark" toggleable="md"  variant="info" sticky="true" class="transparente">
    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">sancochofest2018</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Line Up</b-nav-item>
          <b-nav-item href="#">Somos</b-nav-item>
          <b-nav-item href="#">Sponsors</b-nav-item>
          <b-nav-item href="#">Contacto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<script>
export default {}
</script>
<style>
body{
  font-family: 'Poppins', sans-serif;
}
.transparente {
  background: rgba(0, 0, 0, 0.3) !important;
}
</style>
