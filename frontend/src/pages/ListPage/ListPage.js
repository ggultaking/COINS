import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AdvanceFilter from "../../components/AdvanceFilter/AdvanceFilter";
import "./ListPage.css";
import CoinItem from "../../components/CoinItem/CoinItem";
const ListPage = (props) => {
  const [searchCoin, setSearchResults] = useState([]);

  const { id } = useParams();
  const [oneGroup, setGroup] = useState([]);
  const [searchLine, setSearchLine] = useState("");

  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };
  const [filteredData, setFilteredData] = useState(props.data);

  const handleSearch = (selectedOptions, yearRange, priceRange) => {
    const [priceFrom, priceTo] = priceRange;
    const [yearFrom, yearTo] = yearRange;
    const url = `/advancefilter/${priceFrom}/${priceTo}/${yearFrom}/${yearTo}`;
  
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error retrieving data from the server");
        }
        return res.json();
      })
      .then((data) => setFilteredData(data))
      .catch((err) => console.log(err.message));
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

  const searchHandler = () => {
    fetch(`/searchcoin?query=${searchLine}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error retrieving data from the server");
        }
        return res.json();
      })
      .then((data) => setSearchResults(data))
      .catch((err) => console.log(err.message));
  };
  
  const coinsToShow = searchCoin.length ? searchCoin : oneGroup;
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
         onClick={searchHandler}
          >
            Search
          </button>
        </div>
      </div>
      <AdvanceFilter onSearch={handleSearch}  />
      <div >
      {coinsToShow && (
      <ul className="coins_container">
        {coinsToShow.map((coin) => (
          <li key={coin.id}>
            <Link to={`/descriptionpage/${coin.id}`}>
              <CoinItem {...coin} />
            </Link>
          </li>
        ))}
      </ul>
    )}
      </div>
    </div>
  );
};

export default ListPage;
