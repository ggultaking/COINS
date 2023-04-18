import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AvanceFilter.css"
import {
  showUpAction,
  showBelowAction,
} from "../../redux/searchCoin/searchAction";
import { useState } from "react";


const AdvanceFilter = () => {



  const [searchMiniLine, setSearchMiniLine] = useState("");

  const searchLineChange= (e) => {
    setSearchMiniLine(e.target.value);
  };



  const showUpButton = useSelector((store) => store.searchReducer.showUp);
  const showBelowButton = useSelector(
    (store) => store.searchReducer.showBelow
  );
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
              <select
                className="advanced-filter__select maxi__select"
                type="text"
              ></select>
            </label>
            <label className="advanced-filter__label">
              Metal
              <select
                className="advanced-filter__select maxi__select"
                type="text"
              ></select>
            </label>
            <label className="advanced-filter__label">
              Quality of the coin
              <select
                className="advanced-filter__select maxi__select"
                type="text"
              ></select>
            </label>
          </div>
          <div className="advanced-filter__secondTwo">
            <p className="advanced-filter__label">Price</p>
            <div className="secondTwo__component">
              <label className="advanced-filter__subLabel">
                <span className="mini__label">from</span>

                <input
                  className="advanced-filter__select mini__input"
                  type="number"
                  onChange={searchLineChange}
                ></input>
              </label>
              <label className="advanced-filter__subLabel">
                <span className="mini__label mini__label-to">to</span>

                <input
                  className="advanced-filter__select mini__input"
                  type="number"
                  onChange={searchLineChange}
                ></input>
              </label>
            </div>

            <p className="advanced-filter__label">Year of issue</p>
            <div className="secondTwo__component">
              <label className="advanced-filter__subLabel">
                <span className="mini__label">from</span>

                <input
                  className="advanced-filter__select mini__input"
                  type="number"
                  onChange={searchLineChange}
                ></input>
              </label>
              <label className="advanced-filter__subLabel">
                <span className="mini__label mini__label-to">to</span>

                <input
                  className="advanced-filter__input mini__input"
                  type="number"
                  onChange={searchLineChange}
                ></input>
              </label>
             
            </div>
            <button
            type="submit"
            className="search-box__form-advance"
            disabled={!searchMiniLine}
          >
           Advance Search
          </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default AdvanceFilter
