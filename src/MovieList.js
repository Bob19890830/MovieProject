import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

import MovieDetails from "./MovieDetails";

const MovieList = (props) => {

    const API_KEY = "dc3b33a1778d623937ff76aaf6e6080c";
    const IMG_SRC_BASE = `https://image.tmdb.org/t/p/w500`;
    const BASE_URL = `https://api.themoviedb.org/3`;
    const API_KEY_STR = `api_key=${API_KEY}`;

    const history = useHistory();

    const [movies, setMovies] = useState([]);

    const imgStyle = {
        width: '80%',
        height: 'auto',
    }

    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        marginBottom: '40px',
    }

    const containerStyle = {
        display: 'grid',
        gridTemplateColumns:'repeat(4, 1fr)',
        justifyItems: 'center',
        alignItems: 'center',
        justifyContent:'center',
    }

    const getImgUrl = (poster_path) => {
        let imageUrl = `${IMG_SRC_BASE}${poster_path}`
        return imageUrl;
    }

    const handleTitle = (e) => {
        history.push(`/MovieDetails/${e.target.id}`);
    }

    useEffect(()=> {
        axios.get(`${BASE_URL}/movie/${props.category}?page=${props.page}&${API_KEY_STR}`)
            .then(function(response){
                setMovies(response.data.results)
                props.handleTotalPages(response.data.total_pages)
            })
    },[props.category, props.page])

    return(
        <div className='card-container' style={containerStyle}>
            {movies.map((movie) => {
                return(
                    <div key={movie.id} className='movie-card' style={cardStyle}>
                        <img src = {getImgUrl(movie.poster_path)} style={imgStyle}/>
                        <div className='movie-title' id={movie.id} onClick={(e)=>handleTitle(e)}>{movie.title}</div>
                        <div style={{marginTop:'10px', position:'relative', right:'90px'}}>Ratings:{movie.vote_average}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieList;