
/* creo la carta */
export function createCard(movie) {

    return `<article class="items-start border-[3px] border-black  hover:border-blue-400 h-[300px] w-[170px] rounded-xl text-xs gap-3">
    <img class="h-[120px] w-[100%] object-cover p-3" src="${movie.image}" alt="">
    <h2 class="font-bold text-left text-[10px]">${movie.title}</h2>
    <h3 class=" text-left text-[10px]">${movie.tagline}</h3>
    <p class="text-left text-[10px] line-clamp-5 "> Description: ${movie.overview}</p>
    <a href="/assets/pages/details.html?id=${movie.id}" class="bg-black text-white  rounded-sm text-[10px] ">ir a detalles</a>
    </article> `
}

/* itero las cartas */
export function crearTemplate(listaMovies) {
    let template = ""
    for (const movie of listaMovies)
    template += createCard(movie)

return template
}
/* creo el selector de los generos de peliculas */
export function createSelector(generosFiltrados) {
    return `<option value="${generosFiltrados}">${generosFiltrados}</option>`
}

/* funcion para imprimir cartas en el contenedor en base al selector */
export function imprimirTemplate(listaGeneros, contenedor, fn) {
    let template = ""
    for (const generoIterado of listaGeneros) {
        template += fn(generoIterado)
    }
    contenedor.innerHTML = template
}
/* filtro peliculas por titulo */
export function filtrarTitulos(listado, titulos) {
    const filtro = listado.filter(movie => movie.title.toLowerCase().includes(titulos.toLowerCase()))
    return filtro
}
/* filtro peliculas por */
export function filtroPorGenero(listadoDePeliculas, generoSeleccionado){

    const filtroDeGenero = listadoDePeliculas.filter(movie => movie.genres.includes(generoSeleccionado))

return filtroDeGenero
}