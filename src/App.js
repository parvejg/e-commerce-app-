import "./App.css";
import { LandingPage } from "./Components/LandingPage";
import { ProductPage } from "./Components/ProductPage";
import { Login, SignUp } from "./Components/ModalPage";
import { AddressPage } from "./Components/AddressPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartPage, WishlistPage } from "./Components/WishlisAndCartPage";
import { SelectRadioAddress } from "./Components/SelectRadioAddressPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="login-page" Component={Login} />
          <Route path="signUp-page" Component={SignUp} />
          <Route path="cart-page" Component={CartPage} />
          <Route path="address-page" Component={AddressPage} />
          <Route path="landing-page" Component={LandingPage} />
          <Route path="product-page" Component={ProductPage} />
          <Route path="wishlist-page" Component={WishlistPage} />
          <Route path="createNewAccount-page" Component={SignUp} />
          <Route path="select-address-page" Component={SelectRadioAddress} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
