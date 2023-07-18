import "./App.css";
import { LandingPage } from "./Components/LandingPage";
import React, { StrictMode } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductPage } from "./Components/ProductPage";
import { Login, SignUp } from "./Components/ModalPage";
function App() {
  return (
    <StrictMode>
   <div className="App">
    
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="landing-page" Component={LandingPage} />
        <Route path="product-page" Component={ProductPage} />
        <Route path="login-page" Component={Login} />

        <Route path="createNewAccount-page" Component={SignUp} />
      </Routes>
    </Router>
  </div>
    </StrictMode>
 
  );
}

export default App;
