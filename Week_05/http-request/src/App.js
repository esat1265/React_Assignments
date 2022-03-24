import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Page from "./components/Page";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Page" element={<Page />} />
    </Routes>
  );
}

export default App;
