import "./Navbar.css";
import { ImSearch } from "react-icons/im";
import { BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
export const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <h3 className="flipcart-text"> Flipcart </h3>{" "}
      <div className="navbar-input-wrapper">
        <input className="navbar-input" type="text" />
        <span className="search-icon-wrapper">
          <a className="search-icon" href="/">
            <ImSearch />
          </a>
        </span>
      </div>{" "}
      <div className="navbar-links-wrapper">
        <li>
          <a className="navbar-links sign-up" href="/">
            Sign In{" "}
          </a>{" "}
        </li>{" "}
        <div className="navbar-icon-links-wrapper">
          <li>
            <a className="navbar-links" href="/">
              <BsCart className="cart-icon" />
              <small className="cart-icon-wrapper">
                <span className="unitOfCart">15</span>
              </small>
            </a>{" "}
          </li>{" "}
          <li>
            <a className="navbar-links" href="/">
              <AiOutlineHeart className="wishlist-icon" />
              <small className="wishlist-icon-wrapper">
                <span className="unitOfWishlist">13</span>
              </small>
            </a>{" "}
          </li>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};
