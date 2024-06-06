import React, { useContext, useState } from "react";
import logo from "../assets/img/header-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg";
import { LanguageContext } from "../../context";
import { ImHeart } from "react-icons/im";
import Favorite from "../Favorite";

const Header = () => {
  const { ALLDark, setALLDark, Lan, setLang, Favorite } =
    useContext(LanguageContext);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  return (
    <div
      id="header"
      style={{
        background: ALLDark ? "black" : "rgb(9, 19, 84)",
      }}
    >
      <div className="container">
        <div className="header">
          <img src={logo} alt="img" width={170} />
          <div className="header--nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/popular"}>Popular</Link>
            <Link to={"/toprated"}>TopRated</Link>
          </div>
          <select
            className="select"
            onChange={(e) => {
              setLang(e.target.value);
            }}
          >
            <option value="en-US" className="option">
              English
            </option>
            <option value="ru-RU" className="option">
              Русский
            </option>
            <option value="fr-FR" className="option">
              France
            </option>
          </select>
          <div className="header--search">
            <input
              type="text"
              onInput={(e) => setInput(e.target.value)}
              placeholder="Search.."
            />
            <button onClick={(e) => navigate(`/search/${input}`)}>
              Search
            </button>
            <a className="header--dark" onClick={() => setALLDark(!ALLDark)}>
              <CgDarkMode />
            </a>
            <a className="heart-icons" onClick={() => navigate("/favorite")}>
    
      {Favorite.length? <div className="message">
                <h6>{Favorite.length}</h6>
              </div>:null
                }
              <ImHeart />
            </a>
    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
