import { AiOutlineHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import "./Badge.css";
import { Link } from "react-router-dom";
import { AppContext } from "./UseContex";
import { useContext } from "react";

export const Cart = () => {
  const contex = useContext(AppContext);
  const { state } = contex;

  return (
    <span>
      <Link to="/cart-page" className="navbar" href="/">
        <BsCart className="cart-icon" />
        <small className="cart-icon-wrapper">
          <span className="unitOfCart">{state.cartList.length} </span>
        </small>
      </Link>{" "}
    </span>
  );
};

export const Wishlist = () => {
  const contex = useContext(AppContext);
  const { state } = contex;
  return (
    <span>
      <Link to="/wishlist-page" className="navbar-links" href="/">
        <AiOutlineHeart className="wishlist-icon" />
        <small className="wishlist-icon-wrapper">
          <span className="unitOfWishlist">{state.wishlistList.length}</span>
        </small>
      </Link>
    </span>
  );
};
