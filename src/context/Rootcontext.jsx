import React, { useEffect, useState } from "react";
import { LanguageContext } from ".";

const Rootcontext = ({ children }) => {
  const [ALLDark, setALLDark] = useState(false);
  const [Favorite,setFavorite]=useState([])
  const [Lan, setLang] = useState("en-US");
 const ProductFavorite=()=>{
  let fav=JSON.parse(localStorage.getItem("Favorite"))||[];
  setFavorite(fav)
 }
 useEffect(()=>{
  ProductFavorite()
 },[])
  return (
    <LanguageContext.Provider
      value={{
        ALLDark,
        setALLDark,
        Lan,
        setLang,
        Favorite,
        setFavorite
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default Rootcontext;
let obj = {
  id: 1,
  name: "user",
};
let { name } = obj;
