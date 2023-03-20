import React, { useEffect, useState } from 'react'
import axiosInstance from '../../api/axios'
import requests from '../../api/requests'
import './Banner.css'

function Banner() {

  const [movie, setMovie] = useState([]);

  useEffect(() => {

    async function fetchData()
    {
       const request = 
          await axiosInstance.get(requests.fetchNetflixOriginals);

       const selectedMovie =
          request.data.results[Math.floor(Math.random() * request.data.results.length - 1)];

       setMovie(selectedMovie);

       return request;
    }

    fetchData();

  }, [])

  return (
    <header className='banner' id='banner' style={{
      backgroundSize: "cover",
      backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
      backgroundPosition: "center center"
    }}>
      
      <div className='banner-contents'>
          <h1 className='banner-title'> {movie?.title || movie?.name || movie?.original_name} </h1>

        <div className='banner-buttons'>
          <button className='banner-button'>Play</button>
          <button className='banner-button'>My List</button>
        </div>

        <h1 className='banner-description'>{movie?.overview}</h1>

      </div>

      <div className='banner-fadeBottom'></div>

    </header>
  )
}

export default Banner