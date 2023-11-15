import { useState } from "react"
import MovieCard from "./MovieCard"

export default function NavBar(){
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])

    const searchMovie = async(e)=>{
        e.preventDefault()
        try{
          const url = `https://api.themoviedb.org/3/search/movie?api_key=74a80ecc735c5962e96d541c6020b4a4&query=${query}`
          const res = await fetch(url)
          const data = await res.json()
          console.log(data)
          setMovies(data.results)
        }
        catch(e){
          console.log(e)
        }
      }
      
      const changeHandler = (e)=>{
        setQuery(e.target.value)
      }
    return(
        <header className="w-full fixed left-0 top-0 mb-10 bg-white text-white p-4 bg-opacity-10 backdrop-blur-md">
            <nav class="flex justify-between items-center space-x-4">
              <img src="/back.jpg" alt="logo" className="w-16 rounded-full" />
              <h1 className="font-bold text-6xl">MovieMoto 🎥</h1>
                <div className="flex p-4 text-center">
                    <form action="" onSubmit={searchMovie}>
                        <input type="search"
                         placeholder="search" 
                         id="search" 
                         className="indent-2 ml-2 rounded-lg p-2 active:bg-red-300 mr-4"
                         name="query"
                         value={query}
                         onChange={changeHandler}
                          />
                         <button type="submit" 
                           className="text-3xl hover:text-red-500 ease-in duration-300">
                           <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                    <div>
                    <div>
                        {movies.length > 0 ? (
                            movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
                        ) : (
                            <p>No movies found</p>
                        )}
                  </div>
             </div>
                   
              </div>
         </nav>
        </header>
    )
}
