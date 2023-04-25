import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./AdvanceFilter.css"
import {
  showUpAction,
  showBelowAction,
} from "../../redux/searchCoin/searchAction";
import { useState } from "react";



const AdvanceFilter = (props) => {

  const [searchMiniLine, setSearchMiniLine] = useState(false);


  
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [yearRange, setYearRange] = useState([]);
  const [priceRange, setPriceRange] = useState([]);

  const { id } = useParams();

  const [uniqueCountries, setUniqueCountries] = useState([]);
  const [uniqueCompositions, setUniqueCompositions] = useState([]);
  const [uniqueQualities, setUniqueQualities] = useState([]);


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

  
  const searchLineChange = (e) => {
    setSearchMiniLine(e.target.value);
  };

  useEffect(() => {
    fetch(`/grouplist/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error retrieving data from the server");
        }
        return res.json();
      })
      .then((data) => 
      {     
        const countries = [...new Set(data.map((coin) => coin.country))];
        const compositions = [...new Set(data.map((coin) => coin.composition))];
        const qualities = [...new Set(data.map((coin) => coin.quality))];
        setUniqueCountries(countries);
        setUniqueCompositions(compositions);
        setUniqueQualities(qualities);
      })
      .catch((err) => console.log(err.message));
  }, [id]);



  const handleOptionChange = (e) => {
    const optionValue = e.target.value;
    let newSelectedOptions = [...selectedOptions];

    if (newSelectedOptions.includes(optionValue)) {
      newSelectedOptions = newSelectedOptions.filter(
        (option) => option !== optionValue
      );
    } else {
      newSelectedOptions.push(optionValue);
    }

    setSelectedOptions(newSelectedOptions);
  };

  const handleYearRangeChange = (e) => {
    setYearRange([parseInt(e.target.min), parseInt(e.target.max)]);
  };

  const handleYearRangeSlide = (e) => {
    setYearRange([parseInt(e.target.value), parseInt(e.target.dataset.max)]);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange([parseInt(e.target.min), parseInt(e.target.max)]);
  };

  const handlePriceRangeSlide = (e) => {
    setPriceRange([parseInt(e.target.value), parseInt(e.target.dataset.max)]);
  };

  const handleSearch = () => {
    props.onSearch(selectedOptions, yearRange, priceRange);
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
              >
                {uniqueCountries.map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </select>
            </label>
            <label className="advanced-filter__label">
              Metal
              <select
                className="advanced-filter__select maxi__select"
                type="text"
              >
                {uniqueCompositions.map((composition) => (
                  <option key={composition}>{composition}</option>
                ))}
              </select>
            </label>
            <label className="advanced-filter__label">
              Quality of the coin
              <select
                className="advanced-filter__select maxi__select"
                type="text"
              >
                {uniqueQualities.map((quality) => (
                  <option key={quality}>{quality}</option>
                ))}
              </select>
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
                  className="advanced-filter__select mini__input"
                  type="number"
                  onChange={searchLineChange}
                ></input>
              </label>
            </div>
            <button
              type="submit"
              className="search-box__form-advance"
              disabled={!searchMiniLine}
              onClick={handleSearch}
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
