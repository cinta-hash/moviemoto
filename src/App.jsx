import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import Footer from "./Footer"
import NavBar from "./NavBar"


export default function App(){
  const [movies, setMovies] = useState([])
  const API_URL= "https://api.themoviedb.org/3/movie/popular?api_key=74a80ecc735c5962e96d541c6020b4a4"
  useEffect(()=>{
    fetch(API_URL)
    .then(res=>res.json())
    .then(data=>(setMovies(data.results)))
  },[])

  return(
    <>
    <NavBar />
    <div className="bg-[url('/theatre.jpg')] bg-fixed bg-center bg-cover" >
      <div className="grid grid-cols-4 justify-center gap-4 m-4">
          {movies.map((movie)=>
          <MovieCard
          key={movie.id}
          {...movie} />)}
      </div>
    </div>
    <Footer />
    </>
   
  )
}