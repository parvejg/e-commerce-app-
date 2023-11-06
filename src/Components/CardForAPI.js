import { useContext } from "react";
import "./CardForAPI.css";
import axios from "axios";
import { AppContext } from "./UseContex";
export const CardForApiData = (props) => {
  const { wishlistList, cardDetail } = props;
  const context = useContext(AppContext);
  const { dispatch, state } = context;

  const requestBody = {
    product: wishlistList,
  };

  const encodedToken = localStorage.getItem("encodedToken");
  const headers = {
    headers: {
      authorization: encodedToken,
    },
  };
  const inCart = state.cartList?.some(
    (product) => product._id === wishlistList._id
  );
  const cartApiUrl = "/api/user/cart";
  const wishlistApiUrl = "/api/user/wishlist";
  async function getCartData() {
    const response = await axios.get(cartApiUrl, headers);
    const cartData = response.data.cart;
    dispatch({ type: "cartItem", payload: cartData });
  }
  const removeFromWishlistHandler = async (_id) => {
    const deleteWishlistApiUrl = `/api/user/wishlist/${_id}`;
    const response = await axios.delete(deleteWishlistApiUrl, headers);
    if (response.status === 200 || 201) {
      const res = await axios.get(wishlistApiUrl, headers);
      dispatch({ type: "wishlistItem", payload: res.data.wishlist });
    }
    // dispatch({ type: "wishlistItem", payload: res.data.wishlist });
  };

  const moveToCartHandler = async () => {
    const res = await axios.post(cartApiUrl, requestBody, headers);
    dispatch({ type: "cartItem", payload: res.data.cart });
    if (res.status === 201) {
      removeFromWishlistHandler(wishlistList._id);
      getCartData();
    }
  };

  return (
    <div className="wishlist-card-container">
      <div className="wihslist-card-wrapper">
        <div className="wishlist-card-img-wrapper">
          <img
            className="wishlist-card-img"
            src={wishlistList.src}
            alt="wishlistCard-img"
          />
          <b className="wishlistCard-title">{wishlistList.title}</b>
          <p className="wishlistCard-description">{wishlistList.author}</p>
          <p className="wishlistCard-price"> Price{wishlistList.price}</p>
          <div className="wishlistCard-wrapper">
            {inCart ? (
              <button
                className="wishlistCard-btn"
                onClick={() => removeFromWishlistHandler(wishlistList._id)}
              >
                Move to cart{" "}
              </button>
            ) : (
              <button className="wishlistCard-btn" onClick={moveToCartHandler}>
                Move to cart
              </button>
            )}

            <button
              className="wishlistCard-btn"
              onClick={() => removeFromWishlistHandler(wishlistList._id)}
            >
              Remove from wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
