import {AiOutlineHeart} from "react-icons/ai";
import {BsCart} from "react-icons/bs";
import "./Badge.css";
import {Link} from "react-router-dom";
export const Cart = ({cartItem}) => {
    return (
        <span>
            <Link to="/cart-page" className="navbar" href="/">
                <BsCart className="cart-icon"/>
                <small className="cart-icon-wrapper">
                    <span className="unitOfCart">
                        {cartItem}</span>
                </small>
            </Link>
            {" "} </span>
    );
};
export const Wishlist = ({wishlistItem}) => {
    return (
        <span>
            <Link to="/wishlist-page" className="navbar-links" href="/">
                <AiOutlineHeart className="wishlist-icon"/>
                <small className="wishlist-icon-wrapper">
                    <span className="unitOfWishlist">
                        {wishlistItem}</span>
                </small>
            </Link>
        </span>
    );
};
