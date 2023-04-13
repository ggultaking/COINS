import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { searchCoinAction } from "../../redux/searchCoin/searchAction";
import AdvanceFilter from "../../components/AdvanceFilter/AdvanceFilter";
import "./ListPage.css";
import CoinItem from "../../components/CoinItem/CoinItem";

const ListPage = () => {
  const { id } = useParams();
  const coins = useSelector((store) => store.coinsReducer.coins);
  const filteredCoins = coins.filter((coin) => coin.groupId === id);
  const [searchLine, setSearchLine] = useState("");
  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/grouplist")
      .then((res) => res.json())
      .then((data) => dispatch(searchCoinAction(data)));
  }, [dispatch]);
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
      <AdvanceFilter />
      <div className="coins_container">
        <ul>
          {filteredCoins.map((coin) => (
            <li key={coin.group_id}>
              {coin &&
                coin.map((res) => (
                  <CoinItem
                    key={res.id}
                    coin_name={res.coin_name}
                    image_url={res.image_url_front}
                  />
                ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ListPage;
