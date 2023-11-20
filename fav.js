import {createSelector, imprimirTemplate,  cruzarFiltro} from './assets/module/funciones.js'

const url = `https://moviestack.onrender.com/api/movies`
const apiKey = `0ff70d54-dc0b-4262-9c3d-776cb0f34dbd`

const options = {
    headers: {
        'X-API-KEY': apiKey
    }
}
const selector = document.getElementById("selector")
const finder = document.getElementById("finder")
const favContenedor = document.getElementById(`favContenedor`)
const articuloContenedor = document.getElementById(`artContenedor`)

let movies 
let favs = []
let id = 0
fetch(url, options)
.then(Response => Response.json()) 
.then(data => { 
    movies = data.movies
    let generos = movies.map(movie => (movie.genres)).flat()
    let listaDeGeneros = new Set(generos)
    imprimirTemplate(listaDeGeneros, selector, createSelector)
  
})

.catch(error => console.error(error))


finder.addEventListener("input", () => {
    cruzarFiltro(movies, selector, finder, articuloContenedor)
    
})

/* evento de busqueda por selector */
selector.addEventListener("change", () => {
    cruzarFiltro(movies, selector, finder, articuloContenedor)
})






    

