import {crearTemplate, createCard, createSelector, imprimirTemplate, filtroPorGenero, filtrarTitulos} from './assets/module/funciones.js'

const url = `https://moviestack.onrender.com/api/movies`
const apiKey = `0ff70d54-dc0b-4262-9c3d-776cb0f34dbd`

const options = {
    headers: {
        'X-API-KEY': apiKey
    }
}
const selector = document.getElementById("selector")
const finder = document.getElementById("finder")
const articuloContenedor = document.getElementById(`artContenedor`)
let movies 


fetch(url, options)
.then(Response => Response.json()) 
.then(data => { 
    movies = data.movies
    let generos = movies.map(movie => (movie.genres)).flat()
    let listaDeGeneros = new Set(generos)
    imprimirTemplate(listaDeGeneros, selector, createSelector)
    articuloContenedor.innerHTML += crearTemplate(movies)
})

.catch(error => console.error(error))


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



