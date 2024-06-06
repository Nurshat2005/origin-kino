import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import { API_KEY } from "../../API";
import logo_img from "../assets/img/Dual Ring@1.25x-1.0s-200px-200px (1).svg"
import { LanguageContext } from "../../context";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [count,setCount]=useState(1)
  const {Lan,setLan}=useContext(LanguageContext)
  const getPopular = (key) => {
    setPopular([])
setTimeout(()=>{
  axios(
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${Lan}&page=${count}`
  ).then((res) => {
    setPopular(res.data.results);
  }).catch((res)=>console.log(res.message));
},1700)
  };

  useEffect(() => {
    getPopular(API_KEY);
  }, [count,Lan])

  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
        {
          !popular.length?(
  <center>

        <img src={logo_img} alt=""  style={{marginTop:"50px"}}/>
  </center>
          )
          :(
            <>
            <div className="popular--movie">
          {popular.map((el,idx) =><MovieCard movie={el} key={idx}/>)}
        </div>
        <div className="popular--pagination">
<button onClick={()=>setCount(count >1?count-1:1)}>Prev</button>
<h1>{count}</h1>
<button onClick={()=>setCount(count+1)}>Next</button>
        </div>
        </>
          )
        }
        </div>
      </div>
    </div>
      
    
  )
}

export default Popular;
