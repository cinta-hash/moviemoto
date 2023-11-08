export default function MovieCard({title, poster_path, overview, release_date, vote_average }){
    const IMG_URL= "https://image.tmdb.org/t/p/w500/"
    return(
        <div className="bg-gray-300 bg-opacity-10 backdrop-blur-md text-white rounded-sm">
            <h1 className="uppercase text-xl p-2">{title}</h1>           
            <img src={IMG_URL+poster_path} alt={title} />
            <p>released:{release_date}</p>
            <p>description:{overview}</p>
            <h3>votes:{vote_average}</h3>
            
        </div>
    )
}