import React, { useEffect, useState } from "react";
import {Route} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import DescriptionPage from "./pages/DescriptionPage/DescriptionPage";
import ListPage from "./pages/ListPage/ListPage"
import "./reset.css";
import "./common.css";

const App = () => {
  // const [message,setmessage]=useState("")
  // useEffect(()=>{
  //   fetch('/search').then((res)=>res.json()).then((data)=>setmessage(data.message))
  // },[])
  return (
    <div className="app">
      {/* <p>{message}</p> */}
          <Route path="/" exact component={MainPage} />
          <Route path="/listpage" exact component={ListPage} />
          <Route path="/descriptionpage" exact component={DescriptionPage} />
      
    </div>
  );
};

export default App;

