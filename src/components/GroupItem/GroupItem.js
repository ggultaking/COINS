import React from "react";
import "./GroupItem.css";

import { Link } from "react-router-dom";

const GroupItem = ({ id, groupname, image_url }) => {
  return (
    <article className="coin-group">
      <div className="coin-group__info">
        <ul>
          <li>
            <h1 className="coin-group_name">{groupname}</h1>
            <Link to="/listpage" className="coin-group__show-button">
              Show all &gt;
            </Link>
            <img
              className="coin-group__image"
              src={image_url}
              alt={groupname}
            />
          </li>
        </ul>
      </div>
    </article>
  );
};

export default GroupItem;
