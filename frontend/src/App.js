import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import DescriptionPage from "./pages/DescriptionPage/DescriptionPage";
import ListPage from "./pages/ListPage/ListPage";
import "./reset.css";
import "./common.css";

const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/listpage/:id" element={<ListPage />} />
        <Route path="/descriptionpage/:id" element={<DescriptionPage />} />
      </Routes>
    </div>
  );
};

export default App;