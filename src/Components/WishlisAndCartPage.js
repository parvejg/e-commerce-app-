import axios from "axios";
import { Layout } from "./Layout";
import "./WishlistAndCartPage.css";
import { useContext, useEffect, useState } from "react";
import { PriceDetailCard } from "./PriceDetailCard";
import { CartProductsCard } from "./CartProductsCard";
import { CardForApiData } from "./CardForAPI";
import { AppContext } from "./UseContex";
import { CART_DATA } from "../Constants";

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
    dispatch({ type: CART_DATA, payload: response.data.cart });
  }
  useEffect(() => {
    async function getCartData() {
      const response = await axios.get(cartApiUrl, headers);
      const cartData = response.data.cart;
      setcartItem(cartData);
      dispatch({ type: CART_DATA, payload: response.data.cart });
    }
    getCartData();
  }, []);
  return (
    <Layout>
      {!cartItem?.length ? (
        <div className="empty-cart-container">
          <h1>Your cart is empty</h1>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2Zk2-NugZ4VqyLyvhWXIrBeS59uTaYXYkg&usqp=CAU" />
        </div>
      ) : (
        <div className="cart-ProductsPage-Container">
          <PriceDetailCard cartList={cartItem} />
          <div className="cart-product-list-container">
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
      )}
    </Layout>
  );
};
export const WishlistPage = () => {
  const contex = useContext(AppContext);

  const { dispatch, state } = contex;
  const { wishlistList } = state;
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
      {!wishlistList?.length ? (
        <div className="wihlistEmpty-page-container">
          <div className="empty-wishlist-img-container">
            <h2> your wishlist is empty</h2>
            <img src="https://img.freepik.com/free-vector/empty-concept-illustration_114360-1188.jpg?t=st=1722844624~exp=1722848224~hmac=ab94b272111f2b24b2be559dff700e5815bdfeb0e4b6109ac81c3c1d70c0a91a&w=740" />
          </div>
        </div>
      ) : (
        <div className="wihslist-page-wrapper">
          {state.wishlistList?.map((wishItem) => {
            return <CardForApiData wishlistList={wishItem} />;
          })}
        </div>
      )}
    </Layout>
  );
};
