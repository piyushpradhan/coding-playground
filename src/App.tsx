import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Playground from "./components/Playground";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/playground/:id" element={<Playground />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
