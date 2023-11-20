import { crearTemplate, createSelector, imprimirTemplate, cruzarFiltro } from './assets/module/funciones.js'

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
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
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
    cruzarFiltro(movies, selector, finder, articuloContenedor)

})

/* evento de busqueda por selector */
selector.addEventListener("change", () => {
    cruzarFiltro(movies, selector, finder, articuloContenedor)
})




articuloContenedor.addEventListener("click", (event) => {
    const IdBtn = event.target.dataset.id;
    console.log(IdBtn)
    if (IdBtn) {
        if (!favoritos.includes(IdBtn)) {
            favoritos.push(IdBtn);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));

        } else {
            favoritos.splice(favoritos.indexOf(IdBtn), 1);
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
        }

    }})
