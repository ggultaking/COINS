import React from "react";
import "./DescriptionPage.css";
import { Link } from "react-router-dom";
const DescriptionPage = () => {
  return (
    <div className="description-page">
      <div className="description__image">
        <img alt="Coin front"></img>
        <img alt="Coin back"></img>
      </div>
      <div className="description__part">
        <h1 className="description-page__title"></h1>
        <p className="description-page__text__s"></p>
        <p className="description-page__text__l"></p>
        <div className="description-list">
          <ul className="description-list__name">
            <li>Issuing Country</li>
            <li>Composition</li>
            <li>Quality</li>
            <li>Denomination</li>
            <li>Year</li>
            <li>Weight</li>
            <li>Price</li>
          </ul>
        </div>

        <ul className="description-list__value">
          <li></li>
        </ul>

        <div></div>
        <Link to="/listpage">Back to list</Link>
      </div>
    </div>
  );
};

export default DescriptionPage;
