import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import routes

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// impot styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/Custom.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
