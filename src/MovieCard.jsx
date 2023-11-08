export default function MovieCard({title, poster_path, overview, release_date, vote_average }){
    const IMG_URL= "https://image.tmdb.org/t/p/w500/"
    return(
        <div>
            <h1>{title}</h1>
            <h3>votes:{vote_average}</h3>
            <img src={IMG_URL+poster_path} alt={title} />
            <p>released:{release_date}</p>
            <p>description:{overview}</p>
        </div>
    )
}