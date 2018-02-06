<template>
  <transition name="slide-fade">
    <section class="artist-panel section full-height" v-if="ActiveArtistId">
      <b-container class="full-height" fluid>
        <b-row class="text-center full-height">
          <b-col order="2" class="artist-info" lg="6" md="12">
            <div class="artist-container-info container  align-middle">
              <h1 class="artist-name">{{ActiveArtist.nombre}}</h1>
              <h3 class="uppercase">{{ActiveArtist.origen}}</h3>
              <h5 class="uppercase">{{ActiveArtist.genero}}</h5>
              <p class="artist-description">
                {{ActiveArtist.resena}}
              </p>
                <span class="close-button" @click="$store.commit('changueArtist', 0)"></span>
          </div>
          </b-col>
          <b-col order="1" class="artist-container-image" lg="6" md="12" sm="12">
            <div class="cover">
              <figure class="filter">
                <img class="artist-image fluid" :src="url(ActiveArtist.img)"/>
              </figure>
            </div>
          </b-col>
        </b-row">
      </b-container>
    </section>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'ActiveArtistId',
      'ActiveArtist'
    ])
  },
  methods: {
    url: (file) => {
      return '/images/' + file + '.jpg'
    }
  }
}
</script>
<style>
@media only screen and (max-width: 768px) {
  .artist-container-info{
    margin-top: -16% !important;
    top: 0 !important;
  }

.artist-panel {
  overflow-y: scroll;
}
.artist-container-image{
  height: 30% !important;
}
.artist-description{
  margin-top: 2em !important;
  font-size: 1em !important;
}
.artist-name{
  font-size: 2em !important;
}

}


.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.artist-description{
  text-align: justify;
  margin-top: 4em;
  font-size: 1.3em;
}

.table td, .table th {

    border-top: none;
}

.artist-container-info{
  top:20% !important;
}
.artist-info{
  display: grid;
  /*color: #000;*/
  display: grid;
  /*background: #f8e71ce6;*/
  background: #00aba7;
  color: #fff !important;
}
.artist-name{
  text-transform: uppercase;
  font-size: 4em;
}
.close-button{
  cursor: pointer;
  position: fixed;
  top:15px;
  width: 50px;
  height: 50px;
  left:15px;
  z-index: 1000;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M 10,10 L 30,30 M 30,10 L 10,30'/%3E%3C/svg%3E");

}
.section {
  width: 100%;
  background: #eee;
  height: 100vh;
  border:0;
}
.artist-panel{
  position: fixed;
  z-index:9999;
  top:0;
  background: #00aba7 !important;
  height: 100%;
}
.artist-container-image{
  overflow: hidden;

}

.artist-container-image figure{
  height: 100%;
}
.artist-image{
  height: 100%;
  width: 100%;
object-fit: cover;
}
.cover{
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.full-height{
  height: 100% !important;
}

.filter {
  position: relative;
  -webkit-filter: contrast(109%) brightness(67%) saturate(118%);
  filter: contrast(109%) brightness(67%) saturate(118%);
}
.filter::before {
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  pointer-events: none;
  mix-blend-mode: lighten;
  background: -webkit-linear-gradient(to bottom, rgba(178, 169, 0, 0.9019607843137255) 100, rgba(79, 48, 154, 1));
  background: linear-gradient(to bottom, rgba(178, 169, 0, 0.9019607843137255) 100, rgba(79, 48, 154, 1));
}

.uppercase{
  text-transform: uppercase;
}
</style>
