import "./App.css";
import { Layout } from "./Components/Layout";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavbarLinks } from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Layout} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
