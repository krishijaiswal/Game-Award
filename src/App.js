import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import data from "./data";
import Home from "./Home";

import AllPage from "./pages/AllPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

import "./App.css";

export default function App() {
  return (
    <div className="main">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game1" element={<AllPage data={data[0]} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
