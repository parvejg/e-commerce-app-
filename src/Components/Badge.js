import { AiOutlineHeart } from "react-icons/ai";
import {BsCart} from "react-icons/bs";
export const Cart =()=> {
  return (
    <span>
      <a className="navbar-links" href="/">
        <AiOutlineHeart className="wishlist-icon" />
        <small className="wishlist-icon-wrapper">
          <span className="unitOfWishlist">13</span>
        </small>
      </a>
    </span>
  );
};
export const wishlist = () => {
    return (
      <span>
       <a className="navbar-links" href="/">
              <BsCart className="cart-icon" />
             <small className="cart-icon-wrapper"><span className="unitOfCart">15</span></small> 
            </a>{" "}
      </span>
    );
  };