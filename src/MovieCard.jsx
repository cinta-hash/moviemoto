import { useState } from "react"
export default function MovieCard({title, poster_path, overview, release_date, vote_average }){
    const IMG_URL= "https://image.tmdb.org/t/p/w500/"
    const[show, setShow] = useState(false)
    function handleShow(){
        setShow(prevSate=> !prevSate)
    }
    
    return(
        <div class="pt-16">
            <div className="bg-gray-300 bg-opacity-10 backdrop-blur-md text-white rounded-sm indent-2">
            <h1 className="uppercase text-2xl p-2 font-bold">{title}</h1>           
            <img src={IMG_URL+poster_path} alt={title} />
            <p>Released: {release_date}</p>
            <p className="truncate ... ">Overview: {overview}</p>
            <h3>Rating: {vote_average}/10</h3>
            <button type="button" id="show" onClick={()=>{setShow(true)}} className="bg-red-500 p-2 rounded-sm m-4 hover:bg-white hover:text-red-500 duration-300 ease-in">More</button>
            {show && (
                <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative w-5/6 p-8 mx-auto bg-black bg-opacity-10 backdrop-blur-md rounded-md shadow-lg text-white font-bold">
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <p className="mt-4 indent-2">{overview}</p>
                        <button onClick={handleShow} className="absolute top-0 right-0 p-2 mt-2 mr-2 text-lg font-bold text-white rounded-md hover:bg-red-700 duration-300 ease-in">
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
        </div>
        
    )
}
