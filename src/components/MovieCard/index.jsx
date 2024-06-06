import React, { useContext } from "react";
import {Link} from "react-router-dom"
import { LanguageContext } from "../../context";
const MovieCard = ({ movie }) => {
  const {ALLDark}=useContext(LanguageContext)
  return (
    <div className="movieCard"
    style={{
      border:ALLDark?"2px solid white":"2px solid black"
    }}
    >
     <Link to={`/movieDetails/${movie.id}`}>
     <img
        src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
        alt=""
      />
     </Link>
    <div className="movieCard--text">
    <h3>{movie.title}</h3>
      <h4>{movie.release_date}</h4>
    </div>
    </div>
  );
};

export default MovieCard;
