import axios from "axios";
import { Layout } from "./Layout";
import "./WishlistAndCartPage.css";
import { useContext, useEffect, useState } from "react";
import { PriceDetailCard } from "./PriceDetailCard";
import { CartProductsCard } from "./CartProductsCard";
import { CardForApiData } from "./CardForAPI";
import { AppContext } from "./UseContex";

export const CartPage = (props) => {
  const [cartItem, setcartItem] = useState([]);
  const contex = useContext(AppContext);
  const { dispatch, state } = contex;
  const encodedToken = localStorage.getItem("encodedToken");
  const headers = {
    headers: {
      authorization: encodedToken,
    },
  };
  const cartApiUrl = "api/user/cart/";
  async function deleteCartHandler(_id) {
    const deleteCartApiUrl = `/api/user/cart/${_id}`;
    const response = await axios.delete(deleteCartApiUrl, headers);
    setcartItem(response.data.cart);
    dispatch({ type: "cartItem", payload: response.data.cart });
  }
  useEffect(() => {
    async function getCartData() {
      const response = await axios.get(cartApiUrl, headers);
      const cartData = response.data.cart;
      setcartItem(cartData);
      dispatch({ type: "cartItem", payload: response.data.cart });
    }
    getCartData();
  }, []);
  return (
    <Layout>
      <div className="cart-ProductsPage-Container">
        <PriceDetailCard cartList={cartItem} />
        <div className="">
          {state.cartList?.map((cartItems) => {
            return (
              <CartProductsCard
                cartItem={cartItems}
                setcartItem={setcartItem}
                deleteCartHandler={() => deleteCartHandler(cartItem._id)}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
export const WishlistPage = () => {
  const contex = useContext(AppContext);
  const { dispatch, state } = contex;
  const wishlistApiUrl = "/api/user/wishlist";
  const encodedToken = localStorage.getItem("encodedToken");
  const headers = {
    headers: {
      authorization: encodedToken,
    },
  };
  useEffect(() => {
    async function getCartData() {
      const response = await axios.get(wishlistApiUrl, headers);
      const wishlistData = response.data.wishlist;
      dispatch({ type: "wishlistItem", payload: wishlistData });
    }
    getCartData();
  }, []);
  return (
    <Layout>
      <div className="wihslist-page-wrapper">
        {state.wishlistList?.map((wishItem) => {
          return <CardForApiData wishlistList={wishItem} />;
        })}
      </div>
    </Layout>
  );
};
