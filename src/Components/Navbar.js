import "./Navbar.css";
import { ImSearch } from "react-icons/im";
import { BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Cart, Wishlist } from "./Badge";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <h3 className="flipcart-text"> Flipcart </h3>{" "}
      <div className="navbar-input-wrapper">
        <input
          placeholder="Seach Flipcart.."
          className="navbar-input"
          type="text"
        />
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
          <Wishlist />
          <Cart />
        </div>{" "}
      </div>{" "}
    </nav>
  );
};
export  const NavbarLinks=()=>{
  return <div className="navbarLinks-wrapper">
<Link className="navbar-bottom-links" to="/Brand-page" >Brand</Link>
<Link className="navbar-bottom-links" to="/Men-page" >Men</Link>
<Link className="navbar-bottom-links" to="/Women-page" >Women</Link>
<Link className="navbar-bottom-links" to="/Kids-page" >Kids</Link>
<Link className="navbar-bottom-links" to="/Mobile-page" >Mobile</Link>
<Link className="navbar-bottom-links e" to="/Electronics-page" >Electronics</Link>
<Link className="navbar-bottom-links beauty" to="/Beauty-page" >Beauty</Link>
<Link className="navbar-bottom-links fashion" to="/Fashion-page" >Fashion</Link>
<Link className="navbar-bottom-links plant" to="/Plant-page" >Plant</Link>

  </div>
}
