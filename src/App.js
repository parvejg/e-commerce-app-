import "./App.css";
import { LandingPage } from "./Components/LandingPage";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { ProductPage } from "./Components/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="product-page" Component={ProductPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
