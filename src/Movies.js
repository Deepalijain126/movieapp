import React from 'react';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';


const Movies = () => {
    const {movie} = useGlobalContext();
  
    return (
      <>
       
        <section className="movie-page">
          <div className="grid grid-4">
            { movie.map((curMovieElem) => {
                  const { imdbID, Title, Poster } = curMovieElem;
                  
  
                  return (
                    <NavLink to={`movie/${imdbID}`} key={imdbID}>
                      <div className="card">
                        <div className="card-info">
                          <h2>
                            {Title}
                          </h2>
                          <img src={Poster} alt="#" />
                        </div>
                      </div>
                    </NavLink>
                  );
                })}
              
          </div>
        </section>
      </>
    );
  };
      

export default Movies
