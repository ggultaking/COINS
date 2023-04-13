import React from "react";
import "./GroupItem.css";

import { Link } from "react-router-dom";

const GroupItem = ({id, groupname, image_url }) => {
  
  return (
    <article  >
 
        <ul   >
          <li  className="coin-group__info">

            <h1 className="coin-group_name">{groupname}</h1>
            <Link to={`/listpage/${id}`} className="coin-group__show-button">
              Show all &gt;
            </Link>
            <img
              className="coin-group__image"
              src={`https://docs.google.com/uc?id=${image_url}`}
              alt={groupname}

            />

          </li>
        </ul>



    </article>
  );
};

export default GroupItem;
