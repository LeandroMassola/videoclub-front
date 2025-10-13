

export async function getLatest() {
    const latestMovies = await fetch("http://localhost:8000/api/movies/");
    
    return await latestMovies.json()
}

export async function getMovieDetail(id) {
    const moviePicked = await fetch(`http://localhost:8000/api/movies/${id}`)
    console.log(moviePicked);
    
    return await moviePicked.json()
}

export async function getMovieTrailer(id) {
    const moviePicked = await fetch(`http://localhost:8000/api/movies/${id}/trailer`)
    console.log(moviePicked);
    
    return await moviePicked.json()
}