import { useEffect, useState } from "react";
import "./CardForAPI.css";
export const CardForApiData = ({ wihslistList }) => {
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
            <button className="wishlistCard-btn">Add to cart</button>
            <button className="wishlistCard-btn">Add to wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};
