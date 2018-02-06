import Vuex from 'vuex'

const state = {
  activeArtistId: 0,
  lineUp: [
    {
      'id': 1,
      'nombre': 'Son 21',
      'resena': 'son 21 banda del distrito de agua blanca cali creada en el 2014,sus genero es salsa-timba joven de colombia. Creada en el 2014  en el  distrito de agua blanca soñando con expresar musica propia a todo el mundo con humildad y sabor',
      'origen': 'Cali',
      'genero': 'Timba',
      'img': 'son21'
    },
    {
      'id': 2,
      'nombre': 'ammaretto ensamble',
      'resena': 'Es una propuesta musical que retoma los sonidos del sabor caleño provenientes del barrio. Con 12 músicos enescena, esta agrupación presenta una salsa que nos remite a las sonoridades de los 70s pero que ha logrado reinventarseacoplando estas influencias a las nuevas tendencias. De estaforma, ha consolidado un sonido propio que marca un nuevo camino en la producción salsera de la ciudad.',
      'origen': 'Pereira',
      'genero': 'Musica colombiana',
      'img': 'amaretto'
    },
    {
      'id': 99,
      'nombre': 'Clandeskina',
      'resena': 'Es una propuesta musical que retoma los sonidos del sabor caleño provenientes del barrio. Con 12 músicos enescena, esta agrupación presenta una salsa que nos remite a lassonoridades de los 70s pero que ha logrado reinventarseacoplando estas influencias a las nuevas tendencias. De estaforma, ha consolidado un sonido propio que marca un nuevo camino en la producción salsera de la ciudad.',
      'origen': 'Cali',
      'genero': 'Salsa',
      'img': 'clandeskina'
    },
    {
      'id': 3,
      'nombre': 'via cerrada',
      'resena': 'Escuche ese juego de vientos. Luego sienta como el bajo y la batería van soltando lo brazos y las piernas, que si comienza a moverse de un lado a otro... No se preocupe, ¡el piano puede ser el culpable! ¿Nota que su cabeza se mueve hacia arriba y hacia abajo y que empieza a dar pequeños saltos al compás de la guitarra? ¡Eso es Vía Cerrada! ',
      'origen': 'Barbosa ',
      'genero': 'Ska',
      'img': 'viacerrada'
    },
    {
      'id': 21,
      'nombre': 'Dostrescinco',
      'resena': 'Dostrescinco transita por la magia, la poesía, relatan experiencias, ironías de la vida, se superan, se preparan, se deciden. Un disco que demuestra maduración, amor por lo que hacen; dejan atrás los obstáculos pero aprenden de ellos y lo plasman. Los instrumentos potencian las composiciones y los viajes internos que recorren en sus líricas. Cada integrante de la banda estampa en sus letras un tránsito de sensaciones; los años pasan y no vienen solos, cada uno de los emcees se nutre de experiencias y éstas se vuelcan en la música.',
      'origen': 'Uruguay',
      'genero': 'Hip-hop',
      'img': 'dostrescinco'
    },
    {
      'id': 4,
      'nombre': 'unos vagabundos',
      'origen': 'medellin',
      'resena': 'El poder tiene la escuela, los medios de comunicación y las leyes como herramientas para expresar su discurso, para enseñarnos a vivir de acuerdo a lo que necesita de nosotros. Así que la banda se ha nutrido de otras fuentes: Fernando Vallejo, Niquitown, Débora Arango, Bajo Tierra, Desapatadoz y otros miles que han sido referentes en la música, la danza, la pintura, el teatro y todo el arte. Esos contradiscursos, que muestran unos mundos diferentes a los del poder, son la herencia que queda y es esa la visión que se ofrece en este disco.',
      'genero': 'punk',
      'img': 'unosvagabundos'
    },
    {
      'id': 5,
      'nombre': 'mr demian',
      'resena': 'Mr Demián world is black , hiphop hard core opera, generando conciencia a través de líricas profundas  , comentando realidades',
      'origen': 'Tulua',
      'genero': 'Hip-hop',
      'img': 'mrdemian'
    },
    {
      'id': 6,
      'nombre': 'alto volumen',
      'resena': 'Alto Volumen es un conjunto de soñadores de Cali – Colombia que unen sus historias y las ganas de hacer música, para subirle el volumen a todo lo humanamente posible tocando HIP-FUNK. Influenciados por el Jazz, Soul, R&B, Funk, Hip-hop, Rock y sonidos colombianos,  crean una conversación continua entre el  Bass y el Bombo-Clap con guitarras entre sincopas  y vientos con olor a épocas doradas. Sus versos son  honestos y sarcásticos, llenos de energía, fuerza y elegancia, que despiertan en sus oyentes las ganas de celebrar y seguir caminando.',
      'origen': 'Cali',
      'genero': 'hip Hip-hop',
      'img': 'altovolumen'
    },
    {
      'id': 7,
      'nombre': 'dalay band',
      'resena': 'Su melodía es tranquila, reparadora; un sonido auténtico que se retroalimenta de las raíces caribeñas, y florece en una amplia diversidad de ritmos y géneros que en conjunto con los distintos elementos musicales logran aportar a la banda una sonoridad propia y auténtica. Zambas argentinas, chacareras, boleros, cumbias, porros y músicas populares tejen una amplia red de influencias musicales en las que las fronteras del paisaje sonoro se disuelven para acompañar con soltura las inflexiones de la voz y la guitarra.',
      'origen': 'Cartagena',
      'genero': 'Cantautor',
      'img': 'dalayband'
    },
    {
      'id': 8,
      'nombre': 'altibajo latin son',
      'resena': 'Altibajo Latín Son es una banda santandereana con 13 años de trayectoria, tocando los géneros salsa, son tradicional, guajira, bolero y su propia fusión de son, songo, pop, latin jazz y timba cubana. Sus siete integrantes van desde el saxofón, la trompeta, el bajo, los timbales, congas, el tres cubano, guitarra y voz líder. ',
      'origen': 'bucaramanga',
      'genero': 'Son cubano',
      'img': 'altibajo'
    },
    {
      'id': 9,
      'nombre': 'Suakata',
      'resena': 'A finales del año 2015, a partir de puras coincidencias (o no) de la vida cotidiana, en un contexto multicultural donde la música se convierte en la figura alrededor de la cual se crea una comunión, es de donde nacerá Suakatá. La música de Suakatá es una fusión de ritmos contundentes con influencias reggae y dub y ritmos del folclore colombiano y caribeños, que invitan a bailar.',
      'origen': 'bogota',
      'genero': 'reggae',
      'img': 'suakata'
    },
    {
      'id': 10,
      'nombre': 'Ra la culebra',
      'resena': 'Somo una banda caleña, de lo que nosotros denominamos, Rock Culebrero. Una explosión de música para los oídos para todo aquel que se arrisque a tratar de entender qué es lo que está escuchando. Ra la culebra es una banda que se puede poguear y se puede bailar.',
      'origen': 'Cali',
      'genero': 'Punk',
      'img': 'ralaculebra'
    },
    {
      'id': 11,
      'nombre': 'Astrolabio',
      'resena': 'Astrolabio nace a principios del año 2015, por iniciativa de Camilo Parra, (fundador y exmiembro de Monsieur Periné) y Camila Jiménez (cantante y compositora).\n\nA lo largo de su trayectoria han realizado numerosos conciertos, participado en festivales, y han jugado con cualquier ritmo que se hermane con su energía delirante, mostrando así una propuesta de música inclusiva.\n\nEsta banda se caracteriza por fusionar diversos géneros y ritmos latinoamericanos, dando como resultado un sonido propio al que han denominado “Pop Alterlatino”.',
      'origen': 'Bogotá',
      'genero': 'Fusion',
      'img': 'astrolabio'
    },
    {
      'id': 12,
      'nombre': 'rain of fire ',
      'resena': 'En mayo del 2016 nuevamente comienzan los ensayos para acoplarse y ser una banda con proyectos ambiciosos la cual consiste en llevar una propuesta única, un mensaje que Rain Of Fire quiere mostrarle al mundo, y así empezaron a componer y crear temas basados en experiencias vividas, temas sociales y en todo lo que querían expresar, llegando así a tener en el transcurso de 1 año 10 canciones que en estos momentos se encuentran grabando para su primer álbum que se llamara ALMA EN KARMA.',
      'origen': 'Tulua',
      'genero': 'metal',
      'img': 'rainoffire'
    },
    {
      'id': 20,
      'nombre': 'DERAIZ',
      'origen': 'USA',
      'resena': 'De Raiz es una banda de latinos residentes en Estados Unidos que ha venido desarrollando su proceso durante 4 años desde el Estado de New Jersey;  3 Colombianos 1 Argentino y 1 Uruguayo traen sus influencias musicales a este proyecto que intenta en su laboratorio musical incluir ritmos que van desde el Funk al Blues, del Hard Rock al reggae, Después de haber estado en colombia abriendo para Aterciopelados en la ciudad de Barranquilla y una serie de conciertos posteriores en New York y New Jersey DeRaiz lanza su primer álbum titulado Entre el cielo y el infierno   y del cual se desprende la gira promocional por Colombia que da inicio en el Sancochofest2018.',
      'genero': 'rock',
      'img': 'deraiz'
    },
    {
      'id': 13,
      'nombre': 'vingus band',
      'resena': 'Con 3 temas bosquejados en Barcelona (España) y una idea clara de cómo quería sonar (Bajo, Guitarra, Corno Francés, Batería y Flauta Traversa), Mario Vega regresa a Medellín para reunirse con 2 viejos amigos y poner en marcha su proyecto; y es así como a principios de 2012 nace Vingus Band; una agrupación de Smooth Jazz que se muestra con cortes definidos y un estilo particular interpretativo, reflejando una rítmica funk marcada, enérgica y groovera.',
      'origen': 'Medellin',
      'genero': 'funk jazz',
      'img': 'vingusband'
    },
    {
      'id': 56,
      'nombre': 'emci rimas',
      'resena': 'Emci Rimas, es Samir Campo Gallego. Artista de HipHop, poeta y fotógrafo. Nació en la ciudad de Cali en 1987. Nominado en dos oportunidades a los premios Shock en la categoría de “Mejor Artista HipHop” en los años 2014 y 2016. Su primer disco “La Esencia del Alma”, editado en el 2011 y re- editado en el 2014, contó con la participación de artistas\n\ninternacionales; las cantantes de música Jazz, Ángeles Dorrio, Rosa Lazar, Lara Bello, y el MC y productor español “El jefe de la M.” Ha participado en distintos eventos dentro y fuera del país, entre ellos, la Feria Internacional de la Música en Buenos Aires (Argentina). Ha compartido escenario con artistas como: Izal, La vida Boheme, Eruka Sativa, Monsieur Periné, Troker y Cabadzi Actualmente se encuentra en la preparación de su próximo EP titulado “Oleografía”, del cual se han desprendido dos sencillos: “Los Amores de la Poesía” y su más reciente single “Poesía Erótica”, una colaboración con la banda mexicana Troker. Ahora sigue en proceso de grabación con Cristhian Salgado, productor y tecladista del grupo Herencia de Timbiquí',
      'origen': 'Cali',
      'genero': 'hip Hip-hop',
      'img': 'emcirimas'
    },
    {
      'id': 14,
      'nombre': 'lingala champeta',
      'resena': 'Lingala champeta es una agrupación de musica SOUKOUS sin tanto perendengue',
      'origen': 'Cartagena',
      'genero': 'champeta',
      'img': 'lingala'
    },
    {
      'id': 16,
      'nombre': 'joe taylor the fire band',
      'origen': 'providencia',
      'genero': 'reggae',
      'img': 'joetaylor'
    },
    {
      'id': 34,
      'nombre': 'wahari',
      'origen': 'venezuela',
      'resena': 'La propuesta musical y artística de Wahari intenta integrar lo urbano con la música latinoamericana, paseándose por diferentes estilos musicales donde predominan el Jazz, el pop, el folk y el rock, generando así un discurso fresco y potente a nivel sonoro, poético y vocal. En 2016 clasificó para representar a Venezuela en el Festival Internacional de Cantautores de Costa Rica, destacándose entre las 1500 propuestas participantes de América Latina y España. ',
      'genero': 'cantautor',
      'img': 'wahari'
    },
    {
      'id': 18,
      'nombre': 'kuisitambo',
      'origen': 'bucaramanga',
      'resena': 'El grupo completa su tercer año de actividad, enfocándose en la creación musical, tanto de obras propias como adaptaciones y arreglos creados por los músicos de la agrupación, quienes provienen de la carrera de música de la Universidad de Caldas, y de distintos procesos musicales que se desarrollan en la región.',
      'genero': 'folclor',
      'img': 'kuisitambo'
    },
    {
      'id': 17,
      'nombre': 'vox fractal',
      'origen': 'ibague',
      'resena': 'La agrupación - colectivo Vox Fractal se consolidó en el año 2013 buscando re - plantear semiológicamente elementos de músicas folclóricas y raizales, llevándolas a la experimentación mediante un formato instrumental alternativo y contemporáneo, con miras a lograr nuevo concepto musical - artístico por medio de guitarras eléctricas, tambores y gritos cadenciosos en la escena musical Colombiana.',
      'genero': 'rock',
      'img': 'voxfractal'
    },
    {
      'id': 89,
      'nombre': 'vi trola',
      'resena': 'Es una fusión de música instrumental que interpreta géneros provenientes de distintos contextos, lugares y culturas del mundo. Reúne influencias de la música tradicional colombiana y suramericana además del jazz, rock, funk y ritmos afroamericanos. Buscando un nuevo aire estético y sonoro, explotando la riqueza sonora de este formato instrumental, y así establecer su propia identidad musical.',
      'origen': 'manizales',
      'genero': 'SOUL, BLUES',
      'img': 'vitrola'
    },
    {
      'id': 19,
      'nombre': 'Pino Moré',
      'resena': 'Pinó Moré es una agrupación joven que empezó en el año 2016 como un piano trio y por un giro del destino se convirtió en un septeto. Desde su formación ha tenido algunos recitales en escenarios como la Universidad El Bosque, la Universidad Pedagógica Nacional y en el Conservatorio de la Universidad Nacional, en el mítico Casa de Citas y en San Café Jazz Club en Bogotá, y los festivales AlterArte y Hay Fiestón en la ciudad de Cartagena de Indias y el Festival de Jazz y Blues del Teatro La Libélula Dorada (Bogotá).',
      'origen': 'bogotá',
      'genero': 'Jazz Colombiano',
      'img': 'pinomore'
    },
    {
      'id': 121,
      'nombre': 'maleja ramirez',
      'resena': 'Maleja Ramírez, cantautora tulueña que asume la música como su mayor pasión, destacándose como una artista integral y versátil. Intérprete de géneros como el Pop, Pop Rock, Baladas, Boleros, Bossanova, Gypzy Jazz, Rock en Español, Blues, Reggae; géneros entre los cuales realiza fusiones con las cuales quiere marcar la diferencia en el mercado musical. Ha sido ganadora de importantes concursos nacionales y regionales además de ser ex participante del reality LA VOZ KIDS del Canal Caracol. Ha tenido la oportunidad de ser telonera de artistas como Mojito Lite, Siam, Maia, Choquibtown, Alejandro Palacios, Fanny Lu, entre otros. Hoy llega al Sancocho Fest con el lanzamiento oficial de su nuevo trabajo musical titulado “FLOR NEGRA” como interprete, autora y compositora de todos los temas de este EP que fue grabado en la ciudad de Bogotá con el reconocido productor Pacho Casas.',
      'origen': 'tulua',
      'genero': 'fusion',
      'img': 'malejaramirez'
    }
  ],
  editions: [
    {'id': 1, año: '2017', 'nombre': 'sancochofest 2017', edicion: 'I'},
    {'id': 2, año: '2017', 'nombre': 'sancochofest 2017', edicion: 'I'},
    {'id': 3, año: '2017', 'nombre': 'sancochofest 2017', edicion: 'I'}
  ],
  sponsors: [
    {id: 2, nombre: 'Sancocho', img: 'asociacion.png'},
    {id: 5, nombre: 'alcaldia tulua', img: 'casadetodos.jpg'},
    {id: 5, nombre: 'alcaldia tulua', img: 'tuluaenamora.png'},
    {id: 4, nombre: 'weblcoloster', img: 'webcloster.png'},
    {id: 9, nombre: 'tuluaguia', img: 'tuluaguia.png'},
    {id: 3, nombre: 'eltrebol', img: 'eltrebol.jpg'},
    {id: 1, nombre: 'amalgama', img: 'amalgama.png'},
    {id: 6, nombre: 'gane', img: 'gane.png'},
    {id: 7, nombre: 'talentohumano', img: 'talentohumano.jpg'},
    {id: 8, nombre: 'provj', img: 'provj.png'},
    {id: 10, nombre: 'camaradecomercio', img: 'camaradecomercio.png'},
    {id: 12, nombre: 'escueladerechoshumanos', img: 'escueladerechoshumanos.jpg'},
    {id: 13, nombre: 'huertarebelde', img: 'huertarebelde.png'}
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
