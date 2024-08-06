import axios from "axios";
import "./WishlistCard.css";
import { useContext } from "react";
import { AppContext } from "./UseContex";
import { WISHLIST_ENDPOINT } from "../Endpoints";
import { CART_DATA, WISHLIST_DATA } from "../Constants";
import { fetchCart, fetchWishlist, postCart } from "../ApiMethods";

export const WishlistCard = (props) => {
  const { wishlistList } = props;
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

  async function getCartData() {
    const response = await fetchCart();
    const cartData = response.data.cart;
    dispatch({ type: CART_DATA, payload: cartData });
  }
  const removeFromWishlistHandler = async (_id) => {
    const endpoint = `${WISHLIST_ENDPOINT}/${_id}`;
    const response = await axios.delete(endpoint, headers);
    if (response?.status === 200 || response?.status === 201) {
      const res = await fetchWishlist();
      dispatch({ type: WISHLIST_DATA, payload: res.data.wishlist });
    }
  };

  const moveToCartHandler = async () => {
    const res = await postCart(requestBody);
    dispatch({ type: CART_DATA, payload: res.data.cart });
    if (res?.status === 201 || res?.status === 200) {
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
