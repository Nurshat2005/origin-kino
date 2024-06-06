import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../../../API";
import { useParams } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import MovieActor from "../../../MovieActor";
import { LanguageContext } from "../../../../context";

const ActorsDetails = () => {
  const {Lan}=useContext(LanguageContext)
  const [read, setRead] = useState(true);
  let { personId } = useParams();
  const [details, setDetails] = useState({});
  const GetActorsdetails = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=${Lan}`
    ).then((res) => {
      setDetails(res.data);
    });
  };

  useEffect(() => {
    GetActorsdetails(API_KEY);
  },[Lan]);
  console.log(details);
  return (
    <>
      <hr />
      <div id="actorsDetails">
        <div className="container">
          <div className="actorsDetails">
            {
              <div className="card--name">
                <div className="icons">
                  <img
                    src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${details.profile_path}`}
                    alt="img"
                    className="profile"
                  />
                  <a className="a">
                    <FaFacebook />
                  </a>
                  <a className="a">
                    <FaTwitter />
                  </a>
                  <a className="a">
                    <FaInstagram />
                  </a>
                  <a className="a">
                    <FaYoutube />
                  </a>
                  <h3 className="h3">Personal information</h3>
                  <h5> Gender</h5>
                  <h5>{details.gender}</h5>
                  <h3>Date of Birth</h3>
                  <h5>{details.birthday}</h5>
                  <h3>Place of birth</h3>
                  <h5>{details.place_of_birth}</h5>
                  <h3>Also known as</h3>
                  <h6>{details.also_known_as}</h6>
                </div>
                <div className="biography">
<h1>{details.name}</h1>

                  <h3>Biography</h3>
                  <p>
                    {read === false
                      ? details.biography.slice(0, 300)
                      : details.biography}
                  </p>
                  <span
                    className="span"
                    onClick={() => {
                      setRead(!read);
                    }}
                  >
                    {read ? "close_" : "read more..."}
                    <FaArrowRight />
                  </span>
                  <h2 className="fame">Fame for</h2>
                  <MovieActor actorId={personId}/>
                </div>

               
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ActorsDetails;
