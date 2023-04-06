import React from "react";
import { useSelector } from "react-redux";
import CoinItem from "../CoinItem/CoinItem";
import "./Coins.css";
import { useDispatch } from "react-redux";
import {
  showUpAction,
  showBelowAction,
} from "../../redux/searchFilm/searchAction";
const Coins = () => {
const movies=useSelector((store)=>store.searchReducer.films)
const showUpButton = useSelector((store) => store.searchReducer.showUp);
const showBelowButton = useSelector((store) => store.searchReducer.showBelow);
const dispatch = useDispatch();

const showUp = () => {
  dispatch(showUpAction());
};
const showBelow = () => {
  dispatch(showBelowAction());
};
  return (
    <div>
    {showUpButton && (
      <button className="advanced-filter__button" onClick={showBelow}>
        <span className="advanced-filter__button__label">
          Advanced filter
        </span>
        \/
      </button>
    )}
    {showBelowButton && (
      <button className="advanced-filter__button" onClick={showUp}>
        <span className="advanced-filter__button__label">
          Advanced filter
        </span>
        /\
      </button>
    )}
    {showBelowButton && (
      <div className="advanced-filter">
        <div className="advanced-filter__firstThree">
          <label className="advanced-filter__label">
            Issuing country
            <input
              className="advanced-filter__input maxi__input"
              type="text"
            ></input>
          </label>
          <label className="advanced-filter__label">
            Metal
            <input
              className="advanced-filter__input maxi__input"
              type="text"
            ></input>
          </label>
          <label className="advanced-filter__label">
            Quality of the coin
            <input
              className="advanced-filter__input maxi__input"
              type="text"
            ></input>
          </label>
        </div>
        <div className="advanced-filter__secondTwo">
          <p className="advanced-filter__label">Price</p>
          <div className="secondTwo__component">
            <label className="advanced-filter__subLabel">
              <span className="mini__label">
              from
              </span>
             
              <input
                className="advanced-filter__input mini__input"
                type="text"
              ></input>
            </label>
            <label className="advanced-filter__subLabel">
              <span className="mini__label mini__label-to" >
              to
              </span>
         
              <input
                className="advanced-filter__input mini__input"
                type="text"
              ></input>
            </label>
          </div>

          <p className="advanced-filter__label">Year of issue</p>
          <div className="secondTwo__component">
            <label className="advanced-filter__subLabel">
              <span className="mini__label">
              from
              </span>
              
              <input
                className="advanced-filter__input mini__input"
                type="text"
              ></input>
            </label>
            <label className="advanced-filter__subLabel">
              <span className="mini__label mini__label-to">
              to
              </span>
              
              <input
                className="advanced-filter__input mini__input"
                type="text"
              ></input>
            </label>
          </div>
        </div>
      </div>
    )}
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
    </div>
  );
};

export default Coins;
