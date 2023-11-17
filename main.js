import {crearTemplate, createSelector, imprimirTemplate,cruzarFiltro} from './assets/module/funciones.js'

/* capturo los identificadores de HTML */
const selector = document.getElementById("selector")
const finder = document.getElementById("finder")

let generos = movies.map(movie => (movie.genres)).flat()
let listaDeGeneros = new Set(generos)

const articuloContenedor = document.getElementById(`artContenedor`)
articuloContenedor.innerHTML += crearTemplate(movies)

/* imprimo la lista de peliculas en el selector */
imprimirTemplate(listaDeGeneros, selector, createSelector)

/* evento de busqueda por texto */
finder.addEventListener("input", () => {
    cruzarFiltro(movies, selector, finder, articuloContenedor)
    
})

/* evento de busqueda por selector */
selector.addEventListener("change", () => {
    cruzarFiltro(movies, selector, finder, articuloContenedor)
})





