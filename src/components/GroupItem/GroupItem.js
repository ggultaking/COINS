import React from "react";
import "./GroupItem.css";
import Bullion from "../images/Bullion.svg"
import Commemoorative from "../images/Commemorative.svg"
import Exclusive from "../images/Exclusive.svg"
import { Link } from "react-router-dom";

const GroupItem = ({ GroupName,Image }) => {




  return (
    <article className="coin-group">
     
      <div className="coin-group__info">
        <h1 className="coin-group_name">
        Bullion coins
        </h1>
        <Link
        to="listpage"
          
          className="coin-group__show-button"

        >
          Show all  &gt;
        </Link>
        <img className="coin-group__image" src={Bullion} alt={GroupName} />
      </div>
      <div className="coin-group__info">
        <h1 className="coin-group_name">
       Exclusive coins
        </h1>
        <Link
               to="listpage"
          className="coin-group__show-button"
      
        >
          Show all  &gt;
        </Link>
        <img className="coin-group__image" src={Exclusive} alt={GroupName} />
      </div>
      <div className="coin-group__info">
        <h1 className="coin-group_name">
        Commemoorative coins
        </h1>
        <Link
                 to="listpage"
          className="coin-group__show-button"

        >
          Show all  &gt;
        </Link>
        <img className="coin-group__image" src={Commemoorative} alt={GroupName} />
      </div>
  
    </article>
  );
};

export default GroupItem;
 