import React from "react";
import { useSelector } from "react-redux";
import CoinItem from "../CoinItem/CoinItem";
import "./Coins.css";


const Coins = () => {
const movies=useSelector((store)=>store.searchReducer.films)

  return (
    <ul className="movies">
      {movies&& movies.map((movie) => (
        <li className="movies__item" key={movie.imdbID}>
          <CoinItem imdbID={movie.imdbID}
            Title={movie.Title}
            Year={movie.Year}
            Poster={movie.Poster} />
        </li>
      ))}
    </ul>
  );
};

export default Coins;
