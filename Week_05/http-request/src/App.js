import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Page from "./components/Page";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  

  //  const person ={
  //   "firstName": "mehmet",
  //   "lastName": "demir",
  //   "email": "demir@mail",
  //   "password": "123",
  //   "about": "selam",
  //   "id": 1
  //  }

  return (
    <Routes>
      <Route path="/" element={<Home setData={setData} />} />
      <Route path="/Page" element={<Page person={data}/>} />
    </Routes>
  );
}

export default App;
