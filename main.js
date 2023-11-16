import {crearTemplate, createCard, createSelector, imprimirTemplate, filtroPorGenero, filtrarTitulos} from './assets/module/funciones.js'

const url = `https://moviestack.onrender.com/api/movies`
const apiKey = `0ff70d54-dc0b-4262-9c3d-776cb0f34dbd`

const options = {
    headers: {
        'X-API-KEY': apiKey
    }
}
fetch(url, options)
.then(Response => Response.json()) 
.then(data => {
  const movies = data.movies
  createCard(movies)
  crearTemplate(movies)
  createSelector(movies)
  imprimirTemplate(listaDeGeneros, selector, createSelector)
})
.catch(error => console.log(error))

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



