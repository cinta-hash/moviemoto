import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Footer from "./Footer";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState("home");

  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=74a80ecc735c5962e96d541c6020b4a4";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=74a80ecc735c5962e96d541c6020b4a4&query=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
    setPage("results");
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      {page === "home" && (
        <div>
          <header className="w-full fixed left-0 top-0 mb-10 bg-white text-white p-4 bg-opacity-10 backdrop-blur-md">
            <nav className="flex justify-between items-center space-x-4">
              <img src="/back.jpg" alt="logo" className="w-16 rounded-full" />
              <h1 className="font-bold text-6xl">MovieMoto 🎥</h1>
              <div className="flex p-4 text-center">
                <form action="" onSubmit={searchMovie}>
                  <input
                    type="search"
                    placeholder="search"
                    id="search"
                    className="indent-2 ml-2 rounded-lg p-2 text-gray-600 mr-4"
                    name="query"
                    value={query}
                    onChange={changeHandler}
                  />
                  <button type="submit" className="text-3xl hover:text-red-500 ease-in duration-300">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </nav>
          </header>
          <div className="bg-[url('/theatre.jpg')] bg-fixed bg-center bg-cover font-raleway">
            <div className="grid grid-cols-4 justify-center gap-4 m-4">
              {movies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}

      {page === "results" && (
        <div className="bg-[url('/theatre.jpg')] bg-fixed bg-center bg-cover font-raleway">
           <button
           className="bg-white hover:text-white rounded-md hover:bg-red-700 duration-300 m-8 p-4" 
          onClick={() => setPage("home")}>Go Back</button>
          <h1>Search Results</h1>
          <div className="grid grid-cols-4 justify-center gap-4 m-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
