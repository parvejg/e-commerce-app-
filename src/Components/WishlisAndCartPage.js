import axios from "axios";
import { Layout } from "./Layout";
import "./WishlistAndCartPage.css";
import { useEffect, useState } from "react";
import { PriceDetailCard } from "./PriceDetailCard";
import { CartProductsCard } from "./CartProductsCard";
export const CartPage = (props) => {
  const [cartItem, setCartItem] = useState([]);

  const cartApiUrl = "/api/user/cart";
  const encodedToken = localStorage.getItem("encodedToken");
  const headers = {
    headers: {
      authorization: encodedToken,
    },
  };
  async function deleteCartHandler(_id) {
    const deleteCartApiUrl = `/api/user/cart/${_id}`;
    const encodedToken = localStorage.getItem("encodedToken");
    const headers = {
      headers: {
        authorization: encodedToken,
      },
    };
    const response = await axios.delete(deleteCartApiUrl, headers);
  }
  useEffect(() => {
    async function getCartData() {
      const response = await axios.get(cartApiUrl, headers);
      const cartData = response.data.cart;
      setCartItem(cartData);
    }
    getCartData();
  }, []);
  return (
    <Layout>
      <div className="cart-ProductsPage-Container">
        <PriceDetailCard cartList={cartItem} wishlistList={cartItem} />
        <div className="">
          {cartItem?.map((cartItems) => {
            return (
              <CartProductsCard
                setCartItem={setCartItem}
                cartItems={cartItems}
                deleteCartHandler={() => deleteCartHandler(cartItems._id)}
              />
            );
          })}
        </div>
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
