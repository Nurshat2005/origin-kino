import React, { useContext } from 'react';
import { LanguageContext } from '../../context';
import MovieCard from '../MovieCard';

const Favorite = () => {
    const {Favorite}=useContext(LanguageContext)
    return (
     <div id="favorite">
        <div className="container">
            <div className="favorite">
              {
                Favorite.map((el)=><MovieCard movie={el}/>)
              }
            </div>
        </div>
     </div>
    );
};

export default Favorite;