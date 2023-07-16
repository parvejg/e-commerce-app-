import "./App.css";
import { LandingPage } from "./Components/LandingPage";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductPage } from "./Components/ProductPage";








import { CardForApiData } from "./Components/CardForAPI";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={CardForApiData} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
