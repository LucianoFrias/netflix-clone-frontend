import React, { useEffect, useState } from 'react'
import axiosInstance from '../api/axios';
import BASE_URL from '../api/apiImagesURL'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'


function Row({title, fetchURL, isLargeRow}) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {

        async function fetchData()
        {
            const request = await axiosInstance.get(fetchURL);
            setMovies(request.data.results);

            console.log(request.data.results);
            return request;

        }

        fetchData();
        
    }, [fetchURL]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    const handleClickMovie = (movie) => {
        if (trailerUrl)
        {
            setTrailerUrl("");
        }
        else
        {
            movieTrailer(null, {tmdbId: movie.id})
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'))
            })
            .catch((error) => console.log(error));
        }
    }   


  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className='movies-container'>
            {movies.map(movie => {
                return <img
                key={movie.id}
                onClick={() => handleClickMovie(movie)} 
                src={`${BASE_URL}${movie.poster_path}`} 
                alt={movie.name}
                className={`movie-img ${isLargeRow && "movie-img-large"}`}></img>
            })}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row