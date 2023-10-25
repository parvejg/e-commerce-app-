import axios from "axios";
import { useContext, useEffect } from "react";
import { AppContext } from "./UseContex";

export const CartProductsCard = (props) => {
  const context = useContext(AppContext);
  const { dispatch, state } = context;
  const { cartItems, deleteCartHandler, setCartItem } = props;
  async function cartQtyHandler(_id, type) {
    const cartPostendPoint = `/api/user/cart/${_id}`;
    const encodedToken = localStorage.getItem("encodedToken");
    const headers = {
      headers: {
        authorization: encodedToken,
      },
    };
    const requestBody = {
      action: {
        type: type,
      },
    };
    const response = await axios.post(cartPostendPoint, requestBody, headers);
    setCartItem(response.data.cart);
  }
  useEffect(() => {
    const cartGetEndPoin = "/api/user/cart";
    const encodedToken = localStorage.getItem("encodedToken");
    const headers = {
      headers: {
        authorization: encodedToken,
      },
    };
    async function cartdat() {
      const response = await axios.get(cartGetEndPoin, headers);
      dispatch({ type: "cart_Data", payload: response.data.cart });
    }
  });
  return (
    <div className="cartPage-container">
      <div className="cart-img-container">
        <img alt="cartOfImg" className="cartPage-img" src={cartItems.src} />
      </div>
      <div className="cart-info">
        <h2>{cartItems.title}</h2>
        <h3>{cartItems.author}</h3>
        <p>{cartItems.price}</p>
        <p className="quantity-text">
          Quantity
          <button
            disabled={cartItems.qty === 1}
            className="cart-inc-dec-btn"
            onClick={() => {
              cartQtyHandler(cartItems._id, "decrement");
            }}
          >
            -
          </button>
          {cartItems.qty}
          <button
            className="cart-inc-dec-btn"
            onClick={() => {
              cartQtyHandler(cartItems._id, "increment");
            }}
          >
            +
          </button>
        </p>
        <div className="cartBtn-container">
          <button className="cartBtn" onClick={deleteCartHandler}>
            Remove from Cart
          </button>
          <button className="cartBtn">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};
