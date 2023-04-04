import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchFilmAction } from "../../redux/searchFilm/searchAction";
import { hideUpAction ,showBelowAction} from "../../redux/searchFilm/searchAction";
import { useSelector } from "react-redux";
import "./SearchBox.css";
const SearchBox = () => {
  const showUpButton = useSelector((store) => store.searchReducer.showUp);
  const showBelowButton=useSelector((store)=>store.searchReducer.showBelow);
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
const hideUp=()=>{
  dispatch(hideUpAction())
}
const showBelow=()=>{
  dispatch(showBelowAction)
}
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
      {showUpButton&&
      <div className="advanced-filter" onClick={showBelow}>
     
         <p className="advanced-filter__label">Advanced filter</p>
         <p className="advanced-filter__below"  onClick={hideUp}>\/</p>
         {showBelowButton&&
        <p className="advanced-filter__up">/\</p>}
      

 
       
        
      </div>}
      <div className="coins-container"></div>
    </div>
  );
};

export default SearchBox;
