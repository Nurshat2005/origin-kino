import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";

const Trailer = ({ trailerId }) => {
  // https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US
  let [trailer, setTrailer] = useState([]);
  const [more,setMore]=useState(3)
  const Gettrailer = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${trailerId}/videos?api_key=${key}&language=en-US`
    ).then((res) => {
      setTrailer(res.data.results);
    });
  };
  useEffect(() => {
    Gettrailer(API_KEY);
  }, []);

  return (
    <div id="trailer">
      <div className="container">
        <div className="trailer">
          <div className="trailer--videos">
            {trailer.slice(0,more).map((el) => (
              <iframe
                width="939"
                height="587"
                src={`https://www.youtube.com/embed/${el.key}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            ))}
          </div>
          <center>
            <span>
            {
                trailer.length<=3?null:  
              <button className="more" onClick={()=>setMore(trailer.length>more?more+3:3)}>
            {  trailer.length>more?"more":"shorts"}
              </button>
            }
              
            </span>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
