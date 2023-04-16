import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import AdvanceFilter from "../../components/AdvanceFilter/AdvanceFilter";
import "./ListPage.css";
import CoinItem from "../../components/CoinItem/CoinItem";

const ListPage = () => {
  const { id } = useParams();
  const [oneGroup, setGroup] = useState([]);
  const [searchLine, setSearchLine] = useState("");
  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };

  useEffect(() => {
    fetch(`/grouplist/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error retrieving data from the server");
        }
        return res.json();
      })
      .then((data) => setGroup(data))
      .catch((err) => console.log(err.message));
  }, [id]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`/coin/${id}?search=${searchLine}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error retrieving data from the server");
        }
        return res.json();
      })
      .then((data) => setGroup(data))
      .catch((err) => console.log(err.message));
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
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <AdvanceFilter />
      <div >
        {oneGroup&& (
          <ul className="coins_container">
            {oneGroup.map((coin) => (
              <li key={coin.id}>
                <CoinItem {...coin} />
              </li>
            ))}
          </ul>
        ) }
      </div>
    </div>
  );
};

export default ListPage;
