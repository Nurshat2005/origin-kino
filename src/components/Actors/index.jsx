import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import ActorsDetails from "../Pages/MovieDetalis/ActorsDetails";
import user from "../assets/img/man-300x300.png"
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context";

const Actors = ({ actorsId }) => {
  const {Lan}=useContext(LanguageContext)
  const [actors, setActors] = useState([]);
  const GetActors = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${actorsId}/credits?api_key=${key}&language=${Lan}`
    ).then((res) => {
      setActors(res.data.cast);
    });
  };
  useEffect(() => {
    GetActors(API_KEY);
  }, [Lan]);

  return (
    <div id="actors">
      <div className="container">
        <div className="actors">
          {actors.map((el, idx) => (
            <div className="text">
      
              <Link to={`/actorsDetails/${el.id}`}>
              <img
                  src={ el.profile_path?`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${el.profile_path}`:user}
                  alt="img"
                  className="image" />
              </Link>
              <h3>{el.original_name}</h3>
              <h1>{el.character}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actors;
