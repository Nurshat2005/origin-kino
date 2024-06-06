import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../../API";
import { json, useParams } from "react-router";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosHeart } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { IoPlayOutline } from "react-icons/io5";
import Actors from "../../Actors";
import Trailer from "../../Trailer";
import ActorsDetails from "./ActorsDetails";
import { LanguageContext } from "../../../context";

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { Lan, Favorite,setFavorite } = useContext(LanguageContext);
  let { movieId } = useParams();
  const [modal, setModal] = useState(false);
  const [link, setLink] = useState(false);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  let SomFavorite=Favorite.some((el)=>el.id===details.id)
  const addTofavorite = () => {
    let FindFavorite=Favorite.find((el)=>el.id===details.id)
    if(FindFavorite){
      let filterFavorite=Favorite.filter((el)=>el.id!==details.id)
      setFavorite(filterFavorite)
    }else{

      localStorage.setItem("Favorite",JSON.stringify([...Favorite,details]))
      setFavorite([...Favorite,details])
    }
  };
  console.log(Favorite,"setFavorite");
  const getDetails = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${Lan}`
    ).then((res) => {
      setDetails(res.data);
    });
  };
  useEffect(() => {
    getDetails(API_KEY);
  }, [Lan]);
  let {
    title,
    poster_path,
    release_date,
    overview,
    vote_average,
    backdrop_path,
    runtime,
    tagline,
  } = details;
  return (
    <>
      <div
        id="movieDetails"
        style={{
          background: `  linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%),   url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path})`,
          minHeight: "80vh",
        }}
      >
        <div
          className="bg"
          onClick={() => {
            setModal(false);
          }}
          style={{
            display: modal ? "block" : "none",
          }}
        ></div>
        <div className="container">
          <div className="movieDetails">
            <img
              style={{
                width: "300px",
              }}
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
              alt=""
              onClick={() => {
                setModal(true);
              }}
            />
            <div
              className="modal"
              style={{
                display: modal ? "block" : "none",
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
                alt="img"
                className="modal-img"
              />
              <h3
                className="close"
                onClick={() => {
                  setModal(false);
                }}
              >
                x
              </h3>
              <h2>{title}</h2>
            </div>

            <div className="movieDetails--text">
              <div className="title-text">
                <h1>{title} </h1>
                <sup>
                  <h2>({release_date?.slice(0, 4)})</h2>
                </sup>
              </div>
              <div className="rating">
                <h2 className="h3">{Math.round(vote_average * 10)}%</h2>
                <h3>
                  {Math.floor(runtime / 60)} hour {Math.floor(runtime % 60)}
                  minute
                </h3>
              </div>
              <div className="icons">
                <div className="save">
                  <a>
                    <TfiMenuAlt

                      className="a"
                      onClick={() => {
                      
                        setLink(!link);
                        setLink2(false);
                        setLink3(false);
                      }}
                      style={{
                        color: link ? "grey" : "white",
                      }}
                    />
                  </a>
                </div>
                <div
                  className="save"
                  onClick={() => {
                  }}
                  style={{
                    color: SomFavorite ? "red" : "white",
                  }}
                >
                  <a
                  onClick={()=>addTofavorite()}
                  >
                    <IoIosHeart className="a" />
                  
                  </a>
                </div>
                <div
                  className="save"
                  onClick={() => {
                    setLink3(!link3);
                  }}
                  style={{
                    color: link3 ? "black" : "white",
                  }}
                >
                  <a>
                    <FaRegBookmark className="a" />
                  </a>
                </div>
                <div className="play">
                  <IoPlayOutline className="play-icon" />
                  <p>
                    <a>Play Trailer</a>
                  </p>
                </div>
              </div>
              <h3>" {tagline}"</h3>
              <p className="h4">{overview}</p>
            </div>
          </div>
        </div>
      </div>
      <Actors actorsId={movieId} />
      <Trailer trailerId={movieId} />
    </>
  );
};

export default MovieDetails;
