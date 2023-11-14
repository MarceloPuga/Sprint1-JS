import {crearTemplate, createCard, createSelector, imprimirTemplate, filtroPorGenero, filtrarTitulos} from './assets/module/funciones.js'


const articuloContenedor = document.getElementById(`artContenedor`)

 articuloContenedor.innerHTML += crearTemplate(movies)

const selector = document.getElementById("selector")
const finder = document.getElementById("finder")

let generos = movies.map(movie => (movie.genres)).flat()

let listaDeGeneros = new Set(generos)



imprimirTemplate(listaDeGeneros, selector, createSelector)

finder.addEventListener("input", () => {
    
    const filtradoPorNombre = filtrarTitulos(movies,finder.value)
    
    imprimirTemplate(filtradoPorNombre, articuloContenedor, createCard)
})


selector.addEventListener("input", () => {

const optSelection = selector.value

const filtradoPorGen = filtroPorGenero(movies,optSelection)
const filtradoFinal = filtrarTitulos(filtradoPorGen,finder.value)

imprimirTemplate(filtradoFinal, articuloContenedor, createCard)

})



