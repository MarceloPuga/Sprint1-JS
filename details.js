const url = `https://moviestack.onrender.com/api/movies`
const apiKey = `0ff70d54-dc0b-4262-9c3d-776cb0f34dbd`

const options = {
    headers: {
        'X-API-KEY': apiKey
    }
}
const search = location.search
const params = new URLSearchParams(search)
const id = params.get('id')   

const contenedor = document.getElementById('contenedor')

fetch(url, options)
.then(Response => Response.json()) 
.then(data => {
  let movies = data.movies
    let movie = movies.find(movie => movie.id == id)
    contenedor.innerHTML =`<div class="flex flex-col gap-3 w-[450px] h-[500px] border-[2px] border-black items-center justify-center rounded-lg bg-gray-400 shadow-md shadow-black" >
    <img  class="flex h-[200px] w-[400px] object-cover" src="https://moviestack.onrender.com/static/${movie.image}" alt="image">
    <table class=" h-[100px] w-[400px] border-[2px] border-black text-center justify-center">
        <tr>
            <td class ="font-bold">original lenguage</td>
            <td>${movie.original_language}</td>
        </tr>
        <tr>
            <td class ="font-bold">release data</td>
            <td>${movie.release_date}</td>
        </tr>
        <tr>
            <td class ="font-bold" >runtime</td>
            <td>${movie.runtime}</td>
        </tr>
        <tr>
            <td class ="font-bold">status</td>
            <td>${movie.status}</td>
        </tr>
    </table>
    </div>
    <section class="flex flex-col gap-4 w-[450px] h-[500px] border-[2px] border-black items-center justify-center rounded-lg bg-gray-400 shadow-md shadow-black">
    <h2> Titulo: ${movie.title}</h2>
    <h3> Slogan: ${movie.tagline}</h3>
    <h4>Genero: ${movie.genres}</h4>
    <p> Descripcion: ${movie.overview}</p>
    <table class="h-[100px] w-[400px] border-[2px] border-black text-center">
        <tr>
            <td class ="font-bold">vote average</td>
            <td>${movie.vote_average}</td>
        </tr>
        <tr>
            <td class ="font-bold">budget</td>
            <td>${movie.budget}</td>
        </tr>
        <tr>
            <td class ="font-bold">revenue</td>
            <td>${movie.revenue}</td>
        </tr>
    </table>
    </section>`
})
.catch(error => console.error(error))




