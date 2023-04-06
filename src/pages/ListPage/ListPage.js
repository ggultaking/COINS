import React from "react";
import "./ListPage.css";
import { Link } from "react-router-dom";
const ListPage = () => {
  


  return (
    <div className="list-page">
      <ul>
        
        <Link to="/">Back to Home Page</Link>
      </ul>
    </div>
  );
};

export default ListPage;
