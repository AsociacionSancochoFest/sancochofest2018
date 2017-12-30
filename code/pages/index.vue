<template>
    <div>
      <Menu/>
      <Home/>
      <LineUp/>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Home from '~/components/Home.vue'
import Menu from '~/components/Menu.vue'
import LineUp from '~/components/LineUp.vue'

export default {
  components: {
    Logo,
    Home,
    Menu,
    LineUp
  }
}
</script>

<style>
html, body{
  background: #fff !important;
}
</style>
