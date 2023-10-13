import axios from "axios";
import { Layout } from "./Layout";
import "./WishlistAndCartPage.css";
import { useEffect, useState } from "react";
export const CartPage = () => {
  const [cartItem, setCartItem] = useState([]);
  const cartApiUrl = "/api/user/cart";
  const encodedToken = localStorage.getItem("encodedToken");
  const headers = {
    headers: {
      authorization: encodedToken,
    },
  };
  useEffect(() => {
    async function getCartData() {
      const response = await axios.get(cartApiUrl, headers);
      const cartData = response.data.cart;
      setCartItem(cartData);
      console.log(cartData);
    }
    getCartData();
  }, []);
  return (
    <Layout>
      {cartItem?.map((cartItems) => {
        return (
          <div className="cartPage-container">
            <div className="cart-img-container">
              <img
                alt="cartOfImg"
                className="cartPage-img"
                src={cartItems.src}
              />{" "}
            </div>
            <div className="cart-info">
              <h2>{cartItems.title}</h2>
              <h3>{cartItems.author}</h3>
              <p>{cartItems.price}</p>
              <p className="quantity-text">
                Quantity <button className="cart-inc-dec-btn">-</button>
                {cartItems.qty} <button className="cart-inc-dec-btn">+</button>
              </p>
              <div className="cartBtn-container">
                <button className="cartBtn">Remove from Cart</button>
                <button className="cartBtn">Add to Wishlist</button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="price-details-container">
        <h2>PRICE DETAILS</h2>

        <div className="cartPrice-container">
          <h2 className="cart-price-text">
            Price <span className="priceInWords">78</span>
          </h2>
        </div>
        <div className="cartTotalPrice-container">
          <h2 className="cart-price-text">
            Total Price <span className="priceInWords">00</span>
          </h2>
        </div>
        <button className="proceedTo-shipping-btn">PROCEED TO SHIPPING</button>
      </div>
    </Layout>
  );
};
export const WishlistPage = () => {
  return (
    <Layout>
      <div className="wishlistPage-wrapper">
        <div className="wishlist-wrapper">
          <h3 Wishlist-text>My Wishlist</h3>
          <h3 Wishlist-text>(0 item)</h3>
        </div>
      </div>
    </Layout>
  );
};
