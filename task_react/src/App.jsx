import "./App.css";
// import React,{useEffect} from 'react';

import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import MovieHeader from "./component/MovieHeader/MovieHeader";
import Home from "./component/Home";
// import { useEffect, useState } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/header" element={<MovieHeader />} />
    </Routes>
  );
}

export default App;
