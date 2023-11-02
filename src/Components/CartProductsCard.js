import axios from "axios";
import { AppContext } from "./UseContex";
import { useContext } from "react";

export const CartProductsCard = (props) => {
  const { deleteCartHandler, cartItem, setcartItem } = props;
  const contex = useContext(AppContext);
  const { dispatch, state } = contex;
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
    setcartItem(response.data.cart);
  }

  async function removeCartHandler(_id) {
    const deleteCartApiUrl = `/api/user/cart/${_id}`;

    const encodedToken = localStorage.getItem("encodedToken");
    const headers = {
      headers: {
        authorization: encodedToken,
      },
    };
    const response = await axios.delete(deleteCartApiUrl, headers);
    setcartItem(response.data.cart);
    dispatch({ type: "cartItem", payload: response.data.cart });
  }
  async function moveToWishlistHandler() {
    const wishlistPostendPoint = "/api/user/wishlist";
    const encodedToken = localStorage.getItem("encodedToken");
    const headers = {
      headers: {
        authorization: encodedToken,
      },
    };
    const requestBody = {
      product: cartItem,
    };
    const response = await axios.post(
      wishlistPostendPoint,
      requestBody,
      headers
    );
    dispatch({ type: "wishlistItem", payload: response.data.wishlist });
    removeCartHandler(cartItem._id);
  }
  const inWishlist = state.wishlistList?.some(
    (product) => product._id === cartItem._id
  );
  return (
    <div className="cartPage-container">
      <div className="cart-img-container">
        <img alt="cartOfImg" className="cartPage-img" src={cartItem.src} />
      </div>
      <div className="cart-info">
        <h2>{cartItem.title}</h2>
        <h3>{cartItem.author}</h3>
        <p>{cartItem.price}</p>
        <p className="quantity-text">
          Quantity
          <button
            disabled={cartItem.qty === 1}
            className="cart-inc-dec-btn"
            onClick={() => {
              cartQtyHandler(cartItem._id, "decrement");
            }}
          >
            -
          </button>
          {cartItem.qty}
          <button
            className="cart-inc-dec-btn"
            onClick={() => {
              cartQtyHandler(cartItem._id, "increment");
            }}
          >
            +
          </button>
        </p>
        <div className="cartBtn-container">
          <button
            className="cartBtn"
            onClick={() => removeCartHandler(cartItem._id)}
          >
            Remove from Cart
          </button>
          {inWishlist ? (
            <button className="cartBtn"></button>
          ) : (
            <button className="cartBtn" onClick={moveToWishlistHandler}>
              Move to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
