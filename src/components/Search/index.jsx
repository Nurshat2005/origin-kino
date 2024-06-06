import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { useParams } from "react-router";
import MovieCard from "../MovieCard";

const Search = () => {
    // axios(`  https:api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}
  const [search,setSearch]=useState([])
  let {movieName}=useParams()
 
const SearchName=((key)=>{
    axios(`https:api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`).then((res)=>{
        setSearch(res.data.results)
    })
})
useEffect(()=>{
SearchName(API_KEY)
},[movieName])
  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
        <div className="popular--movie">

            {search.map((el)=><MovieCard movie={el}/>)}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
