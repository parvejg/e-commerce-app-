import "./App.css";
import { LandingPage } from "./Components/LandingPage";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={LandingPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
