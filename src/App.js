import { Route, RouterProvider, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/Pages/MovieDetalis";
import ActorsDetails from "./components/Pages/MovieDetalis/ActorsDetails";
import { useContext } from "react";
import { LanguageContext } from "./context";
import Search from "./components/Search";
import Favorite from "./components/Favorite";
function App() {
  const {ALLDark,setALLDark}=useContext(LanguageContext)
  return (
    <div className="App"
    style={{
      background:ALLDark?"black":"white",
      color:ALLDark?"white":"black",
      border:ALLDark?"white":"black"
    }}
    >
      <Header />
      <Routes>
      <Route path="/search/:movieName" element={<Search/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
        <Route path="/actorsDetails/:personId" element={<ActorsDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
