import "./Navbar.css";
import { BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <h3 className="flipcart-logo">Flipcart</h3>
      <nav className="navbar">
        <input className="navbar-input" type="text" />
        <ul className="unorderedList-wrapper">
          <li>Login</li>
          <li>Sin Up</li>
          <li>Cart</li>
          <BsCart className="cart-icon" />
          <li>Wishlist</li>
          <AiOutlineHeart className="wishlist-icon" />
        </ul>

      </nav>
    </div>
  );
};
