import React from "react";
import "./CoinGroup.css";
import { useDispatch } from "react-redux";
import GroupItem from "../GroupItem/GroupItem";

const CoinGroup = ({ name,image }) => {

  const dispatch = useDispatch();


  return (
    <article className="coin-group">
     
     <ul className="coins__groups">
      {groups&& groups.map((group) => (
        <li className="group__item" key={group.id}>
          <GroupItem id={group.id}
            name={group.name}
           
            image={group.image} />
        </li>
      ))}
    </ul>
    </article>
  );
};

export default CoinGroup;
 