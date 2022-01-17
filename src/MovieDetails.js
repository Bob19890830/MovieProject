import {useState, useEffect, Fragment} from "react";
import axios from "axios";

const MovieDetails = (props) => {

    const BASE_URL = `https://api.themoviedb.org/3`;
    const API_KEY = "dc3b33a1778d623937ff76aaf6e6080c";
    const API_KEY_STR = `api_key=${API_KEY}`;
    const IMG_SRC_BASE = `https://image.tmdb.org/t/p/w500`;

    const movie_id = props.match.params.id;

    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    const [companies, setCompanies] = useState([]);

    const getImgUrl = (poster_path) => {
        let imageUrl = `${IMG_SRC_BASE}${poster_path}`
        return imageUrl;
    }

    useEffect(()=> {
        axios.get(`${BASE_URL}/movie/${movie_id}?${API_KEY_STR}`)
            .then(function(response){
                setMovie(response.data)
                setGenres(response.data.genres);
                setCompanies(response.data.production_companies);
            })} ,[movie_id]);

    return(
        <div className='movie-details'>
            <img src={getImgUrl(movie.poster_path)} style={{width:'400px', height:'600px', marginRight:'20px'}}></img>
                <div className='details-container'>
                    <h1>{movie.original_title}</h1>
                    <h2>Release Date: </h2>
                    <div>{movie.release_date}</div>
                    <h2>Overview: </h2>
                    <div>{movie.overview}</div>
                    <h2>Genres: </h2>
                    <Fragment>
                    {genres.map((genre) => {
                        return(
                            <div>{genre.name}</div>
                        )})}
                    </Fragment>
                    <h2>Average Rating: </h2>
                    <div>{movie.vote_average}</div>
                    <h2>Your Rating: </h2>
                    <h2>Production Companies: </h2>
                    <Fragment>
                        {companies.map((company) => {
                            return(
                                <div>{company.name}</div>
                            )})}
                    </Fragment>
                </div>
        </div>
    )
}

export default MovieDetails;