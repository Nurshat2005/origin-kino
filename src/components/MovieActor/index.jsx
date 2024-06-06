import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import logo from "../../components/assets/img/man-300x300.png";
import { LanguageContext } from "../../context";

const MovieActor = ({ actorId }) => {
  const [actors, setActors] = useState([]);
  const {Lan}=useContext(LanguageContext)
  const getMovieActors = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${key}&language=${Lan}`
    ).then((res) => {
      setActors(res.data.cast);
    });
  };

  useEffect(() => {
    getMovieActors(API_KEY);
  }, [Lan]);
  console.log(actors);
  return (
    <div id="movie-actor">
      <div className="container">
        <div className="movie-actor">

  {actors.map((el) => (
  <div className="mm">
            
            <img
              className="image"
              src={
                el.poster_path
                  ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`
                  : logo
              }
              alt="img"
            />
            <a>{el.title}</a>
  </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieActor;
