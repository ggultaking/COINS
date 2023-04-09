import React from "react";
import "./CoinGroup.css";
import GroupItem from "../GroupItem/GroupItem";
const CoinGroup = ({ name,image }) => {



  return (
    <article className="coin-group">
     <GroupItem/>
    </article>
  );
};

export default CoinGroup;
 