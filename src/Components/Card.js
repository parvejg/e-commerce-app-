import { AiOutlineStar } from "react-icons/ai";
import { FiStar } from "react-icons/fi";
import "./Card.css";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext, useAppContex } from "./UseContex";
export const ProductDemoCard1 = (props) => {
  const { src, alt } = props;
  return (
    <selection className="product-demo-container">
      <div className="product-img-container">
        <img
          className="product-img"
          alt={`product-img ${alt}`}
          src={
            src
              ? src
              : "https://media.istockphoto.com/id/679539190/photo/indian-made-mens-shoes.jpg?s=612x612&w=0&k=20&c=1wTYVNCgSpNcnzfLxPzjfd1swEWXnUZHKzikNupEaWk="
          }
        />
      </div>
      <div className="product-price-container">
        <h3 className="product-price">Price 7999</h3>
      </div>
      <div className="product-titel-container">
        <h4 className="product-demo-text">Sneakers For Men (Brown)</h4>
      </div>
      <div className="Buy-now-btn-wrapper">
        <button className="buy-now-btn">Buy Now</button>
        <button className="cart-btn">Add To Cart</button>
      </div>
    </selection>
  );
};

export const ProductDemoCard3 = (props) => {
  const context = useContext(AppContext);
  const { dispatch, state } = context;
  const { cardDetail } = props;

  const { title, price, src, author, _id } = cardDetail;

  const inCart = state.cartList?.some((prod) => prod._id === cardDetail._id);
  const inWishlist = state.wishlistList?.some(
    (prod) => prod._id === cardDetail._id
  );
  const wishlistApiUrl = "/api/user/wishlist";

  const addToWishlistHandler = async () => {
    const response = await axios.post(wishlistApiUrl, requestBody, headers);
    if (response.status === 200 || 201) {
      const res = await axios.get(wishlistApiUrl, headers);
      dispatch({ type: "wishlistItem", payload: res.data.wishlist });
    }
  };
  const removeFromWishlistHandler = async () => {
    const deleteWishlistApiUrl = `/api/user/wishlist/${_id}`;
    const response = await axios.delete(deleteWishlistApiUrl, headers);
    if (response.status === 200 || 201) {
      const res = await axios.get(wishlistApiUrl, headers);
      dispatch({ type: "wishlistItem", payload: res.data.wishlist });
    }
  };

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

  const addToCartHandler = async () => {
    const response = await axios.post(cartApiUrl, requestBody, headers);
    if (response.status === 200 || 201) {
      const res = await axios.get(cartApiUrl, headers);
      dispatch({ type: "cartItem", payload: res.data.cart });
    }
  };
  async function removeFromCartHandler() {
    const deleteCartApiUrl = `/api/user/cart/${_id}`;
    const response = await axios.delete(deleteCartApiUrl, headers);
    if (response.status === 200 || 201) {
      const res = await axios.get(cartApiUrl, headers);
      dispatch({ type: "cartItem", payload: res.data.cart });
    }
  }
  return (
    <div className="productListingCard-wrapper">
      <img className="listing-img" alt="listingCard-img" src={src} />
      <div className="listing-card-content">
        <h3 className="listing-card-title"> {title}</h3>
        <p className="listingcard-detail"> {author}</p>
        <p className="productListingCard-text">
          <span className="listing-card-price">Price ₹</span>
          {price}{" "}
        </p>
        <div className="listingcard-btn-wrapper">
          {inCart ? (
            <button
              className="listingCard-buyNow-btn"
              onClick={removeFromCartHandler}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="listingCard-buyNow-btn"
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
          )}
          {inWishlist ? (
            <button
              className="listingCard-buyNow-btn"
              onClick={removeFromWishlistHandler}
            >
              Remove from Wishlist
            </button>
          ) : (
            <button
              className="listingCard-buyNow-btn"
              onClick={addToWishlistHandler}
            >
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export const DetailCard = () => {
  return (
    <div className="detail-card-wrapper">
      <img
        className="detail-card-img"
        alt="detail-card"
        src="https://media.istockphoto.com/id/1281328238/photo/studio-portrait-of-a-teen-girl.webp?b=1&s=170667a&w=0&k=20&c=JW_6p9c0PkdpM-MgdjXKXb1y6fubyjyM7-_whTe-LQo="
      />
      <div className="detail-card-content">
        <h3>Women Jackets - Buy Branded Jackets For Women.</h3>
        <p>
          Specs: Spread collar Full button placket Two waist pocketsLong sleeves
          with buttoned cuffs Solid Country of Origin - India
        </p>
      </div>
    </div>
  );
};
export const DetailCard2 = () => {
  return (
    <div className="detail-card-wrapper">
      <img
        className="detail-card-img"
        alt="detail-card"
        src="https://media.istockphoto.com/id/1085224370/photo/a-portrait-of-young-mother-with-a-small-daughter-in-autumn-nature-at-sunset.webp?b=1&s=170667a&w=0&k=20&c=oIvisZG9Mq5VNlVtqWmAk5CiBgryDi77q3ZIVkxh2gY="
      />
      <div className="detail-card-content">
        <h3>Women Jackets - Buy Branded Jackets For Women.</h3>
        <p className="cardDetail">
          Specs: Spread collar Full button placket Two waist pocketsLong sleeves
          with buttoned cuffs Solid Country of Origin - India
        </p>
      </div>
    </div>
  );
};
