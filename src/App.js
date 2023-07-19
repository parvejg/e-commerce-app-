import "./App.css";
import { LandingPage } from "./Components/LandingPage";
import React, { StrictMode } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductPage } from "./Components/ProductPage";
import { Login, SignUp } from "./Components/ModalPage";
import { CartPage, WishlistPage } from "./Components/WishlisAndCartPage";

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

        <Route path="cart-page" Component={CartPage} />
        <Route path="wishlist-page" Component={WishlistPage} />
      </Routes>
    </Router>
  </div>
    </StrictMode>
 
  );
}

export default App;
