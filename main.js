
const articuloContenedor = document.getElementById(`artContenedor`)

articuloContenedor.innerHTML += crearTemplate(movies.data)

function crearTemplate(){
let template = ""
for(const movie of movies)
template += createCard(movie)

return template
}

function createCard(movie){

    return  `<article class="items-start border-[3px] border-black  hover:border-blue-400 h-[260px] w-[170px] rounded-xl text-xs gap-3">
    <img class="h-[120px] w-[100%] object-cover p-3 " src="${movie.image}" alt="">
    <h2 class="font-bold text-left text-[10px]">${movie.title}</h2>
    <h3 class=" text-left text-[10px]">${movie.tagline}</h3>
    <p class="text-left text-[10px] line-clamp-5 "> Description: ${movie.overview}</p>
    
    </article> `
}





/* 
<article class="flex flex-col items-start border-2 border-black h-[220px] w-[170px] rounded-xl " id ="articleContenedor">
            <img class="h-[120px] w-[100%] object-cover p-3" src="https://moviestack.onrender.com/static/y5szbv8zju.jpg" alt="">
            <h2>title</h2>
            <h3>Tagline</h3>
            <h4>description</h4>

        </article> */