import "./Navbar.css";
import { ImSearch } from "react-icons/im";
import { CiUser } from "react-icons/ci";
import { Cart, Wishlist } from "./Badge";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
export const NavbarLinks = () => {
  const [firstapi, SetFirstApi] = useState([]);
  const api = "/api/categories";
  console.log(firstapi);
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        SetFirstApi(data.categories);
      });
  }, []);
  return (
    <div className="navbarLinks-wrapper"> 
      {firstapi.map((item) => {
        return (
          <Link className="navbar-bottom-links"  key={item.id} to="/Brand-page">
            {item.categoryName}
          </Link>
        );
      })}

      {/* <Link className="navbar-bottom-links" to="/Men-page">
        Men
      </Link>
      <Link className="navbar-bottom-links" to="/Women-page">
        Women
      </Link>
      <Link className="navbar-bottom-links" to="/Kids-page">
        Kids
      </Link>
      <Link className="navbar-bottom-links" to="/Mobile-page">
        Mobile
      </Link>
      <Link
        className=" electronics navbar-bottom-links "
        to="/Electronics-page"
      >
        Electronics
      </Link>
      <Link className=" beauty navbar-bottom-links " to="/Beauty-page">
        Beauty
      </Link>
      <Link className=" fashion navbar-bottom-links " to="/Fashion-page">
        Fashion
      </Link>
      <Link className=" plant navbar-bottom-links " to="/Plant-page">
        Plant
      </Link> */}
    </div>
  );
};
export const ResponsiveNavbar = () => {
  return (
    <nav className="responsiveNavbar">
      <h3 className="flipcart-text"> Flipcart </h3>

      <div className="responsiveNavbar-input-wrapper">
        <input
          placeholder="Seach Flipcart.."
          className="responsiveNavbar-input"
          type="text"
        />
        <span className="search1-icon-wrapper">
          <a className="search1-icon" href="/">
            <ImSearch />
          </a>
        </span>
      </div>
    </nav>
  );
};
