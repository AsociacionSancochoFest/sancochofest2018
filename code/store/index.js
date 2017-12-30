import Vuex from 'vuex'

const state = {
  lineUp: [
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: ''}
  ]
}

const getters = {
  AllLineUp: state => {
    return state.lineUp.map(x => x)
  }
}

const createStore = () => {
  return new Vuex.Store({
    state,
    getters
  })
}

export default createStore
