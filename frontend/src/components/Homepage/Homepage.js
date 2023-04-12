import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Homepage.css";
import { useDispatch } from "react-redux";
import { searchGroupAction } from "../../redux/searchCoin/searchAction";
import GroupItem from "../GroupItem/GroupItem";
const Homepage = () => {
  const [searchLine, setSearchLine] = useState("");
  const dispatch = useDispatch();
  const coingroup = useSelector((state) => state.searchReducer.coingroup);

  const searchLineHandler = () => {
    fetch(`/search?query=${searchLine}`)
      .then((res) => res.json())
      .then((data) => dispatch(searchGroupAction(data)));
  };

  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };
  useEffect(() => {
    fetch("/allgroups")
      .then((res) => res.json())
      .then((data) => dispatch(searchGroupAction(data)));
  }, [dispatch]);
  return (
    <div className="search-box">
      <div className="search-box__header">
        <p>Homepage</p>
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
          onClick={searchLineHandler}
        >
          Search
        </button>
      </div>

      <div className="coins-container">
        {coingroup &&
          coingroup.map((res) => (
            <GroupItem
              key={res.id}
              id={res.id}
              groupname={res.groupname}
              image_url={res.image_url}
            />
          ))}
      </div>
      <Link to="/descriptionpage">GO TO DESCRIPTION</Link>
    </div>
  );
};

export default Homepage;
