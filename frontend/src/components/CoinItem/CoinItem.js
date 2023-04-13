import React from "react";
import "./CoinItem.css";

import { Link } from "react-router-dom";

const CoinItem = ({ id, group_id, coin_name, image_url, description_s }) => {
  return (
    <Link to={`/descriptionpage/${id}`}>
  
        <div className="coin_item">
          <img
            className="coin_image"
            src={`https://docs.google.com/uc?id=${image_url}`}
            alt={coin_name}
          />
          <div>
            <h1 className="coin_name">{coin_name}</h1>
            <p className="description_s">{description_s}</p>
          </div>
       
      </div>
    </Link>
  );
};

export default CoinItem;
