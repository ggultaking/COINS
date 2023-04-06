import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchFilmAction } from "../../redux/searchFilm/searchAction";
import {
  showUpAction,
  showBelowAction,
} from "../../redux/searchFilm/searchAction";
import { useSelector } from "react-redux";
import "./SearchBox.css";
const SearchBox = () => {
  const showUpButton = useSelector((store) => store.searchReducer.showUp);
  const showBelowButton = useSelector((store) => store.searchReducer.showBelow);
  const [searchLine, setSearchLine] = useState("");
  const dispatch = useDispatch();
  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${searchLine}&apikey=226bff17`)
      .then((res) => res.json())
      .then((data) => {
        const searchResults = data.Search || []; // If data.Search is undefined, default to an empty array

        dispatch(searchFilmAction(searchResults));
      });
  };
  const showUp = () => {
    dispatch(showUpAction());
  };
  const showBelow = () => {
    dispatch(showBelowAction());
  };
  return (
    <div className="search-box">
      <div className="search-box__header">
        <p>Homepage</p>
      </div>
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Input field
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
          onClick={searchBoxSubmitHandler}
        >
          Search
        </button>
      </form>

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
      <div className="coins-container"></div>
    </div>
  );
};

export default SearchBox;
