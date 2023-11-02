import { useContext, useEffect, useState } from "react";
import "./CardForAPI.css";
import axios from "axios";
import { AppContext } from "./UseContex";
export const CardForApiData = (props) => {
  const { wihslistList, cardDetail } = props;
  const context = useContext(AppContext);
  const { dispatch } = context;
  const moveToCartHandler = async () => {
    async function removeFromCartHandler(_id) {
      const deleteCartApiUrl = `/api/user/cart/${_id}`;
      const res = await axios.delete(deleteCartApiUrl, headers);
      dispatch({ type: "cartItem", payload: res.data.cart });
    }

    const requestBody = {
      product: cardDetail,
    };

    const encodedToken = localStorage.getItem("encodedToken");
    const headers = {
      headers: {
        authorization: encodedToken,
      },
    };
    const cartApiUrl = "/api/user/cart";
    const res = await axios.post(cartApiUrl, requestBody, headers);
    dispatch({ type: "cartItem", payload: res.data.cart });
    removeFromCartHandler(wihslistList._id);
  };
  const removeFromWishlistHandler = async (_id) => {
    const encodedToken = localStorage.getItem("encodedToken");
    const headers = {
      headers: {
        authorization: encodedToken,
      },
    };
    const deleteWishlistApiUrl = `/api/user/wishlist/${_id}`;
    const res = await axios.delete(deleteWishlistApiUrl, headers);
    dispatch({ type: "wishlistItem", payload: res.data.wishlist });
  };
  return (
    <div className="wishlist-card-container">
      <div className="wihslist-card-wrapper">
        <div className="wishlist-card-img-wrapper">
          <img
            className="wishlist-card-img"
            src={wihslistList.src}
            alt="wishlistCard-img"
          />
          <b className="wishlistCard-title">{wihslistList.title}</b>
          <p className="wishlistCard-description">{wihslistList.author}</p>
          <p className="wishlistCard-price"> Price{wihslistList.price}</p>
          <div className="wishlistCard-wrapper">
            <button className="wishlistCard-btn" onClick={moveToCartHandler}>
              Move to cart
            </button>
            <button
              className="wishlistCard-btn"
              onClick={() => removeFromWishlistHandler(wihslistList._id)}
            >
              Remove from wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
