import "./App.css";
import { LandingPage } from "./Components/LandingPage";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductPage } from "./Components/ProductPage";
import { SignIn, SignUp } from "./Components/ModalPage";
function App() {
  return (
    <div className="App">
    
      <Router>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="landing-page" Component={LandingPage} />
          <Route path="product-page" Component={ProductPage} />
          <Route path="signIn-page" Component={SignUp} />
          <Route path="signIn" Component={SignIn} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
