import Vuex from 'vuex'

const state = {
  activeArtistId: 0,
  lineUp: [
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 2, nombre: 'Clandekina', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 3, nombre: 'Dostrescinco', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 4, nombre: 'unos vagabundos', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 5, nombre: 'mr demian', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 6, nombre: 'alto volumen', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 7, nombre: 'dalay band', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 8, nombre: 'altibajo son', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 9, nombre: 'Suakata', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 10, nombre: 'martinbatalla', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 11, nombre: 'Astrolabio', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 12, nombre: 'rain of fire ', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 13, nombre: 'vingus band', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 14, nombre: 'emci rrimas', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 15, nombre: 'juan pablo orozco ', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 16, nombre: 'joe taylor the fire band', origen: 'Cali', genero: 'Salsa', img: ''}
  ]
}

const mutations = {
  changueArtist: (state, idArtist) => {
    state.activeArtistId = idArtist
  }
}

const getters = {
  AllLineUp: state => {
    return state.lineUp.map(x => x)
  },

  ActiveArtistId: state => {
    return state.activeArtistId
  },

  ActiveArtist: state => {
    return state.lineUp.filter(obj => obj.id === state.activeArtistId)[0]
  }

}

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations
  })
}

export default createStore
