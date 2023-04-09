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
      <div>

      </div>
      <Link to="/listpage">Back to list</Link>
      </div>
     
    </div>
  );
};

export default DescriptionPage;
