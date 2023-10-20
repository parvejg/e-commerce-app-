import { useContext, useEffect, useState } from "react";
import { AppContext } from "./UseContex";

export const PriceDetailCard = (props) => {
  const { cartList } = props;
  const { cart, price } = cartList;
  const context = useContext(AppContext);
  const { state, dispatch } = context;

  const cartPrice = cartList.reduce((initialValue, currEle) => {
    let { price, qty } = currEle;
    initialValue = price * qty;
    return initialValue;
  }, 0);

  let total_price = cartList.reduce((initialValue, currEle) => {
    let { price, qty } = currEle;
    initialValue = initialValue + price * qty;
    return initialValue;
  }, 0);
  return (
    <div className="price-details-container">
      <h2>PRICE DETAILS</h2>

      <div className="cartPrice-container">
        <h2 className="cart-price-text">
          Price <span className="priceInWords">{cartPrice}</span>
        </h2>
      </div>
      <div className="cartTotalPrice-container">
        <h2 className="cart-price-text">
          Total Price <span className="priceInWords">{total_price}</span>
        </h2>
      </div>
      <button className="proceedTo-shipping-btn">PROCEED TO SHIPPING</button>
    </div>
  );
};
