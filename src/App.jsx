import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { data } from "autoprefixer"

export default function App(){
  const [movies, setMovies] = useState([])
  const API_URL= "https://api.themoviedb.org/3/movie/popular?api_key=74a80ecc735c5962e96d541c6020b4a4"
  useEffect(()=>{
    fetch(API_URL)
    .then(res=>res.json())
    .then(data=>(setMovies(data.results)))
  },[])

  return(
    <div>
      {movies.map((movie)=>
      <MovieCard
       key={movie.id}
       {...movie} />)}
    </div>
  )
}