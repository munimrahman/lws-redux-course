import React from "react";
import "./App.css";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
