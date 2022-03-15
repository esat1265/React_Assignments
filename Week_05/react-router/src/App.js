import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
