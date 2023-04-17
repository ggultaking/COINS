import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./DescriptionPage.css";

const DescriptionPage = () => {
  const { id } = useParams();
  const [oneCoin, setOneCoin] = useState([]);

  useEffect(() => {
    fetch(`/coin/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error retrieving data from the server");
        }
        return res.json();
      })
      .then((data) => {setOneCoin(data[0])
      console.log(data[0])
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  return (
    <div className="description-page">
      <div className="description__image__container">
        <img className="description__image"
          alt="Coin front"
          src={`https://docs.google.com/uc?id=${oneCoin.image_url_front}`}
        ></img>
        <img className="description__image"
          alt="Coin back"
          src={`https://docs.google.com/uc?id=${oneCoin.image_url_back}`}
        ></img>
      </div>
      <div className="description__part">
        <h1 className="description-page__title">{oneCoin.coin_name}</h1>
        <p className="description-page__text__s">{oneCoin.description_s}</p>
       
        <p className="description-page__text__l">{oneCoin.description_l}</p>
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
          {oneCoin && (
            <ul className="description-list__value">
              <li>{oneCoin.country}</li>
              <li>{oneCoin.composition}</li>
              <li>{oneCoin.quality}</li>
              <li>{oneCoin.denomination}</li>
              <li>{oneCoin.year}</li>
              <li>{oneCoin.weight_g}</li>
              <li>{oneCoin.price_$}</li>
            </ul>
          )}
        </div>
        <div className="back__link">
        <Link  to={`/listpage/${oneCoin.group_id}`}>Back to list</Link>
        </div>
       
      </div>
    </div>
  );
};

export default DescriptionPage;
