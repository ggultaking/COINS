import React from "react";
import "./CoinGroup.css";

const CoinGroup = ({ name,image }) => {



  return (
    <article className="coin-group">
     
     <ul className="coins__groups">
      {/* {groups&& groups.map((group) => (
        <li className="group__item" key={group.id}>
          <GroupItem id={group.id}
            name={group.name}
           
            image={group.image} />
        </li>
      ))} */}
    </ul>
    </article>
  );
};

export default CoinGroup;
 