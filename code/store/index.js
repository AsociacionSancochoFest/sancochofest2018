import Vuex from 'vuex'

const state = {
  activeArtistId: 0,
  lineUp: [
    {id: 1, nombre: 'Son 21', origen: 'Cali', genero: 'Salsa', img: 'son21'},
    {id: 2, nombre: 'Clandeskina', resena: 'Es una propuesta musical que retoma los sonidos del sabor caleño provenientes del barrio. Con 12 músicos enescena, esta agrupación presenta una salsa que nos remite a lassonoridades de los 70s pero que ha logrado reinventarseacoplando estas influencias a las nuevas tendencias. De estaforma, ha consolidado un sonido propio que marca un nuevo camino en la producción salsera de la ciudad.', origen: 'Cali', genero: 'Salsa', img: 'clandeskina'},
    {id: 3, nombre: 'via cerrada', resena: 'Escuche ese juego de vientos. Luego sienta como el bajo y la batería van soltando lo brazos y las piernas, que si comienza a moverse de un lado a otro... No se preocupe, ¡el piano puede ser el culpable! ¿Nota que su cabeza se mueve hacia arriba y hacia abajo y que empieza a dar pequeños saltos al compás de la guitarra? ¡Eso es Vía Cerrada! ', origen: 'Cali ', genero: 'Salsa', img: ''},
    {id: 21, nombre: 'Dostrescinco', resena: 'Dostrescinco transita por la magia, la poesía, relatan experiencias, ironías de la vida, se superan, se preparan, se deciden. Un disco que demuestra maduración, amor por lo que hacen; dejan atrás los obstáculos pero aprenden de ellos y lo plasman. Los instrumentos potencian las composiciones y los viajes internos que recorren en sus líricas. Cada integrante de la banda estampa en sus letras un tránsito de sensaciones; los años pasan y no vienen solos, cada uno de los emcees se nutre de experiencias y éstas se vuelcan en la música.', origen: 'Cali ', genero: 'Salsa', img: 'dostrescinco'},
    {id: 4, nombre: 'unos vagabundos', origen: 'Cali', genero: 'Salsa', img: 'unovagabundos'},
    {id: 5, nombre: 'mr demian', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 6, nombre: 'alto volumen', resena: 'Alto Volumen es un conjunto de soñadores de Cali – Colombia que unen sus historias y las ganas de hacer música, para subirle el volumen a todo lo humanamente posible tocando HIP-FUNK. Influenciados por el Jazz, Soul, R&B, Funk, Hip-hop, Rock y sonidos colombianos,  crean una conversación continua entre el  Bass y el Bombo-Clap con guitarras entre sincopas  y vientos con olor a épocas doradas. Sus versos son  honestos y sarcásticos, llenos de energía, fuerza y elegancia, que despiertan en sus oyentes las ganas de celebrar y seguir caminando.', origen: 'Cali', genero: 'Salsa', img: 'altovolumen'},
    {id: 7, nombre: 'dalay band', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 8, nombre: 'altibajo son', resena: 'Altibajo Latín Son es una banda santandereana con 13 años de trayectoria, tocando los géneros salsa, son tradicional, guajira, bolero y su propia fusión de son, songo, pop, latin jazz y timba cubana. Sus siete integrantes van desde el saxofón, la trompeta, el bajo, los timbales, congas, el tres cubano, guitarra y voz líder. ', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 9, nombre: 'Suakata', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 10, nombre: 'martinbatalla', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 11, nombre: 'Astrolabio', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 12, nombre: 'rain of fire ', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 20, nombre: 'DERAIZ', resena: 'De Raiz es una banda de latinos residentes en Estados Unidos que ha venido desarrollando su proceso durante 4 años desde el Estado de New Jersey;  3 Colombianos 1 Argentino y 1 Uruguayo traen sus influencias musicales a este proyecto que intenta en su laboratorio musical incluir ritmos que van desde el Funk al Blues, del Hard Rock al reggae, Después de haber estado en colombia abriendo para Aterciopelados en la ciudad de Barranquilla y una serie de conciertos posteriores en New York y New Jersey DeRaiz lanza su primer álbum titulado "Entre el cielo y el infierno" y del cual se desprende la gira promocional por Colombia que da inicio en el Sancochofest2018.', origen: 'New Jersey', genero: 'Salsa', img: ''},
    {id: 13, nombre: 'vingus band', resena: 'Con 3 temas bosquejados en Barcelona (España) y una idea clara de cómo quería sonar (Bajo, Guitarra, Corno Francés, Batería y Flauta Traversa), Mario Vega regresa a Medellín para reunirse con 2 viejos amigos y poner en marcha su proyecto; y es así como a principios de 2012 nace Vingus Band; una agrupación de Smooth Jazz que se muestra con cortes definidos y un estilo particular interpretativo, reflejando una rítmica funk marcada, enérgica y groovera.', origen: 'Medellin, Colombia', genero: 'Salsa', img: 'vingusband'},
    {id: 14, nombre: 'emci rrimas', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 15, nombre: 'juan pablo orozco ', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 16, nombre: 'joe taylor the fire band', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 17, nombre: 'wahari', origen: 'Cali', resena: 'El grupo completa su tercer año de actividad, enfocándose en la creación musical, tanto de obras propias como adaptaciones y arreglos creados por los músicos de la agrupación, quienes provienen de la carrera de música de la Universidad de Caldas, y de distintos procesos musicales que se desarrollan en la región.', genero: 'Salsa', img: ''},
    {id: 18, nombre: 'vitrola', resena: 'Es una fusión de música instrumental que interpreta géneros provenientes de distintos contextos, lugares y culturas del mundo. Reúne influencias de la música tradicional colombiana y suramericana además del jazz, rock, funk y ritmos afroamericanos. Buscando un nuevo aire estético y sonoro, explotando la riqueza sonora de este formato instrumental, y así establecer su propia identidad musical.', origen: 'Cali', genero: 'Salsa', img: ''},
    {id: 19, nombre: 'Pino Moré', resena: 'Pinó Moré es una agrupación joven que empezó en el año 2016 como un piano trio y por un giro del destino se convirtió en un septeto. Desde su formación ha tenido algunos recitales en escenarios como la Universidad El Bosque, la Universidad Pedagógica Nacional y en el Conservatorio de la Universidad Nacional, en el mítico Casa de Citas y en San Café Jazz Club en Bogotá, y los festivales AlterArte y Hay Fiestón en la ciudad de Cartagena de Indias y el Festival de Jazz y Blues del Teatro La Libélula Dorada (Bogotá).', origen: 'Cali', genero: 'Salsa', img: 'pinomore'}
  ],
  editions: [
    {id: 1, año: '2017', nombre: 'sancochofest 2017', edicion: 'I'},
    {id: 2, año: '2017', nombre: 'sancochofest 2017', edicion: 'I'},
    {id: 3, año: '2017', nombre: 'sancochofest 2017', edicion: 'I'}
  ],
  sponsors: [
    {id: 1, nombre: 'Centroaguas', img: 'https://placehold.it/100x100'},
    {id: 1, nombre: 'Centroaguas', img: 'https://placehold.it/100x100'},
    {id: 1, nombre: 'Centroaguas', img: 'https://placehold.it/100x100'},
    {id: 1, nombre: 'Centroaguas', img: 'https://placehold.it/100x100'},
    {id: 1, nombre: 'Centroaguas', img: 'https://placehold.it/100x100'},
    {id: 1, nombre: 'Centroaguas', img: 'https://placehold.it/100x100'},
    {id: 1, nombre: 'Centroaguas', img: 'https://placehold.it/100x100'},
    {id: 1, nombre: 'Centroaguas', img: 'https://placehold.it/100x100'},
    {id: 1, nombre: 'Centroaguas', img: 'https://placehold.it/100x100'},
    {id: 1, nombre: 'Centroaguas', img: 'https://placehold.it/100x100'},
    {id: 1, nombre: 'Centroaguas', img: 'https://placehold.it/100x100'}
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

  AllEditions: state => {
    return state.editions.map(x => x)
  },

  AllSponsors: state => {
    return state.sponsors.map(x => x)
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
