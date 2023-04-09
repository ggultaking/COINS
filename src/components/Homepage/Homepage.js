import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import CoinGroup from "../CoinGroup/CoinGroup";
const Homepage = () => {

  const [searchLine, setSearchLine] = useState("");
  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };
 
  

  return (
    <div className="search-box">
      <div className="search-box__header">
        <p>Homepage</p>
      </div>
      <div className="search-box__form" >
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

      
      <div className="coins-container">
    <CoinGroup/>
      </div>
      <Link  to="descriptionpage" >GO TO DESCRIPTION</Link>
    </div>
  );
};

export default Homepage;
