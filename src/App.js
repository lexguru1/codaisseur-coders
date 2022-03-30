import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
