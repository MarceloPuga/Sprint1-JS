import {crearTemplate,createCard} from './assets/module/funciones.js'

const url = `https://moviestack.onrender.com/api/movies`
const apiKey = `0ff70d54-dc0b-4262-9c3d-776cb0f34dbd`

const options = {
    headers: {
        'X-API-KEY': apiKey
    }
}
let allMovies


fetch(url, options)
.then(response => response.json())
.then(data => {
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const movies = data.movies.filter(movie => favoritos.includes(movie.id));
    allMovies = data.movies
    
    
    const contenedorFavs = document.getElementById('favIdContenedor');
    
    
    contenedorFavs.addEventListener("click", (event) => {
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
        const movies = allMovies.filter(movie => favoritos.includes(movie.id));
        contenedorFavs.innerHTML = crearTemplate(movies)
    }
})
contenedorFavs.innerHTML += crearTemplate(movies)

})
.catch(error => console.error(error))

    

