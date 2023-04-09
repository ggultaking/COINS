import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";

import "./ListPage.css";
import { Link } from "react-router-dom";
import { showBelowAction, showUpAction } from "../../redux/searchFilm/searchAction";
const ListPage = () => {
  const [searchLine, setSearchLine] = useState("");
  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };
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
    <div className="list-page">
      <div className="search-box">
        <div className="search-box__header">
          <p>List of the coins</p>
        </div>
        <div className="coin-group__back__button">
          <Link to="/">HomePage</Link>
          <p>--List of the coins</p>
        </div>

        <div className="search-box__form">
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
          >
            Search
          </button>
        </div>
      </div>
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
   
    </div>
    </div>
  );
};

export default ListPage;
