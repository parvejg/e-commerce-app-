import "./Navbar.css";
import {ImSearch} from "react-icons/im";
import {getData} from "./reusableFunction";
import {CiUser} from "react-icons/ci";
import {Cart, Wishlist} from "./Badge";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
export const Navbar = () => {
    const [wishlistItem, setWishlistItem] = useState(0)
    const [cartItem, setCartItem] = useState(0)

    const wishlistApiUrl = "/api/user/wishlist"
    const encodedToken = localStorage.getItem("encodedToken")
    const headers = {
        headers: {
            authorization: encodedToken
        }
    }
    const getWishlistHandler = async () => {
        const response = await axios.get(wishlistApiUrl, headers)
        setWishlistItem(response.data.wishlist.length);                   

    }

    useEffect(() => {
        (async () => {
            getWishlistHandler()
        })();

    }, []);

    const getCartHandler = async () => {
        const cartApiUrl = "/api/user/cart"
        const encodedToken = localStorage.getItem("encodedToken")
        const headers = {
            headers: {
                authorization: encodedToken
            }
        }
        const response = await axios.get(cartApiUrl, headers)
        setCartItem(response.data.cart.length)

    }
    useEffect(() => {
        (async () => {
            const getCart = getCartHandler()
        })();

    }, []);
    return (


        <nav className="navbar-wrapper">
            <Link className="flipcart-text" to="/landing-page">
                {" "}
                Flipcart{" "} </Link>
            <div className="navbar-products-link-wrapper">
                <Link className="navbar-products-link" to="/product-page">
                    Products
                </Link>
            </div>
            <div className="navbar-input-wrapper">
                <input placeholder="Seach Flipcart.." className="navbar-input" type="text"/>
                <span className="search-icon-wrapper">
                    <a className="search-icon" href="/">
                        <ImSearch/>
                    </a>
                </span>
            </div>
            {" "}
            <div className="navbar-links-wrapper">
                <li>
                    <Link className="navbar-links sign-up" to="/login-page">
                        Sign In{" "} </Link>
                    {" "} </li>
                {" "}
                <div className="navbar-icon-links-wrapper">
                    <Cart cartItem={cartItem}/>
                    <Wishlist wishlistItem={wishlistItem}/>
                </div>
                {" "} </div>
            {" "} </nav>
    );
};
export const NavbarLinks = () => {
    const [categoryData, setCategoryData] = useState({});
    const categoryApi = "/api/categories";
    useEffect(() => {
        getData(categoryApi, setCategoryData);
    }, []);
    return (
        <div className="navbarLinks-wrapper">
            {
            categoryData.categories ?. map((item) => {
                return (
                    <Link className="navbar-bottom-links"
                        key={
                            item.id
                        }
                        to="/Brand-page">
                        {
                        item.categoryName
                    } </Link>
                );
            })
        }

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
      </Link> */} </div>
    );
};
export const ResponsiveNavbar = () => {
    return (
        <nav className="responsiveNavbar">
            <div className="phone-view-input-wrapper">
                <Link className="flipcart-text-ph" to="/landing-page">
                    {" "}
                    Flipcart{" "} </Link>
                <Link className="navbar-products-link-ph" to="/product-page">
                    Products
                </Link>
                <input type="text" placeholder="search flicart" className="phn-view-input"/>
                <span className="search-icon-ph-wrapper">
                    <ImSearch className="search-icon-ph"/>
                </span>
            </div>
        </nav>
    );
};
