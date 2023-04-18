import React from "react";
import "./CoinItem.css";



const CoinItem = ({ id, image_id, coin_name, image_url_front, description_s }) => {
  return (

  
        <div className="coin_item">
          <img
            className="coin_image"
            src={`https://docs.google.com/uc?id=${image_url_front}`}
            alt={coin_name}
          />
          <div className="coin_info">
            
            <h1 className="coin_name">{coin_name}</h1>
            <p className="description_s">{description_s}</p>
          </div>
       
      </div>

  );
};

export default CoinItem;
