import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { LanguageContext } from "../../context";
import tv from "../../components/assets/img/tv.png"
import smart from "../../components/assets/img/mobile-0819.jpg"
import smartTv from "../../components/assets/img/device-pile.png"
import baby from "../../components/assets/img/baby.png"
const Home = () => {
  const { Lan } = useContext(LanguageContext);
  const [background, setBackground] = useState([]);
  const AllBackground = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${Lan}page=1`
    )
      .then((res) => {
        const keys = res.data.results.map((el) => el.backdrop_path);
        setBackground(keys);
      })
      .catch((res) => {
        console.log(res);
      });
  };
  useEffect(() => {
    AllBackground(API_KEY);
  }, []);
  const randomIndex = Math.floor(Math.random() * background.length);
  const randomBg = background[randomIndex];
  return (
    <div id="home">
      <div className="conatainer">
        <div className="home">
          <div className="film-text">
            <h1>
              Фильмы, сериалы и многое другое без <br /> ограничений
            </h1>
         <p
         className="p">Смотрите где угодно. Отменить подписку можно в любое время.
</p>
<p className="p1">
Готовы начать просмотр? Введите адрес электронной почты или номер телефона, чтобы <br /> оформить или возобновить подписку.


</p>
   <div className="two">
   <input type="email" name="" id="" placeholder="Адрес эл. почты или номер мобильного телефона" />
   <button className="btn">Начать смотреть</button>
   </div>

          </div>
          <section
            className="media"
            style={{
              background: `url(https://media.themoviedb.org/t/p/w220_and_h330_face${randomBg})no-repeat center /cover`,
              height: "90vh",
              width:"100%"
            }}
          ></section>
          <div className="look">
   <div className="text">
   <h1>Смотрите на <br />
             телевизоре</h1>
             <p>Смотрите на Smart TV, PlayStation, Xbox,<br /> Chromecast, Apple TV, плеерах Blu-ray и других <br /> устройствах.
</p>
   </div>
<div className="tv-image">
<img  className="tv" src={tv} alt="" 
/>


</div>

          </div>
          <div className="smart">
            <div className="women">
              <img src={smart} alt="" />

            </div>
            <div className="smart-text">
              <h1>Загрузите свои <br /> программы для <br /> просмотра в <br /> автономном режиме</h1>
              <p>Легко сохраняйте избранное, и вам всегда будет <br /> что посмотреть.

</p>
            </div>
          </div>
          <div className="tv">
           <div className="tv-text">
           <h1>Смотрите везде</h1>
            <p>Смотрите неограниченное количество фильмов <br /> и телепрограмм на своем телефоне, планшете, <br /> ноутбуке и телевизоре.

</p>
           </div>
<div className="smart-tv">
  <img src={smartTv} alt="" />
</div>
          </div>
          <div className="baby">
            <div className="baby-img">
              <img src={baby} alt="" />
            </div>
            <div className="baby-profile">
              <h1>Создание профилей <br /> для детей</h1>
              <p>Отправляйте детей в приключения с их <br /> любимыми персонажами в пространстве, <br /> созданном специально для них — бесплатно при <br /> наличии членства.

</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
