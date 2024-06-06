import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";
import logo_img from "../assets/img/Dual Ring@1.25x-1.0s-200px-200px (1).svg"
import { LanguageContext } from "../../context";

const TopRated = () => {
  const {Lan,setLan}=useContext(LanguageContext)
  const [toprated, setToprated] = useState([]);
  const [count,setcount]=useState(1)
  const getoprated = (key) => {
    setToprated([])
  setTimeout(()=>{
    axios(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${Lan}&page=${count}`
      )
        .then((res) => {
          setToprated(res.data.results);
        })
        .catch((res) => console.log(res.massage));
  },1500)
  };
  useEffect(() => {
    getoprated(API_KEY);
  }, [count,Lan]);
  return (
    <div id="toprated">
      <div className="container">
        <div className="toprated">
        {
            !toprated.length?(
<center>
<img src={logo_img} alt="" style={{marginTop:"50px"}} />

</center>
            ):(
                <>
          <div className="toprated--movie">
            {toprated.map((el, idx) => 
              <MovieCard movie={el} key={idx} />
            )}
          </div>
          <div className="toprated--pagination">
            <button onClick={()=>setcount(count>1?count-1:1)}>Prev</button>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>Next</button>
          </div>
          </>
        
            )
        }
        </div>
      </div>
    </div>

   
  )
};

export default TopRated;
