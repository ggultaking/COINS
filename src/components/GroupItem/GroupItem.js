import React from "react";
import "./GroupItem.css";
import { useDispatch } from "react-redux";
import { addFilmAction } from "../../redux/addFavorite/favoriteAction";

const GroupItem = ({ GroupName,Image }) => {

  const dispatch = useDispatch();
  const addFilm = () => {
    dispatch(addFilmAction({GroupName}));

  };

  return (
    <article className="coin-group">
     
      <div className="coin-group__info">
        <h3 className="coin-group_name">
          {GroupName}
        </h3>
        <button
          type="button"
          className="coin-group__show-button"
      
        >
          Show all  &gt;
        </button>
        <img className="coin-group__image" src={Image} alt={GroupName} />
      </div>
    </article>
  );
};

export default GroupItem;
 