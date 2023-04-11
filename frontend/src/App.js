import React from "react";
import {Route} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import DescriptionPage from "./pages/DescriptionPage/DescriptionPage";
import ListPage from "./pages/ListPage/ListPage"
import "./reset.css";
import "./common.css";

const App = () => {

  return (
    <div className="app">

          <Route path="/" exact component={MainPage} />
          <Route path="/listpage" exact component={ListPage} />
          <Route path="/descriptionpage" exact component={DescriptionPage} />
      
    </div>
  );
};

export default App;

