import "./Navbar.css";
import { ImSearch } from "react-icons/im";
import { getData } from "./reusableFunction";
import { Cart, Wishlist } from "./Badge";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./UseContex";

export const Navbar = ({ cardDetail }) => {
  const contex = useContext(AppContext);
  const { dispatch } = contex;

  const inputValueHandler = (e) => {
    dispatch({ type: "search_query", payload: e.target.value });
  };

  // const contex = createContext(AppContext)
  // const {state, dispatch} = contex
  // const {cardDetail} = props;
  // const requestBody = {
  //     product: cardDetail
  // }

  // const [cartItem, cartItem] = useState(0)
  // const [wishlistItem, setWishlistItem] = useState(0)

  // const getWishlistHandler = async () => {

  // const wishlistApiUrl = "/api/user/wishlist"
  // const encodedToken = localStorage.getItem("encodedToken")
  // const headers = {
  //     headers: {
  //         authorization: encodedToken
  //     }
  // }
  // const response = await axios.get(wishlistApiUrl, headers)
  // if (response.status === 200 || 201) {
  //     const response = await axios.post(wishlistApiUrl, requestBody, headers)
  //     setWishlistItem(response.data.wishlist.length)
  // }
  // }
  // useEffect(() => {
  //     getWishlistHandler()
  // }, [])
  // const getCartHandler = async () => {
  //     const cartApiUrl = "/api/user/cart"
  //     const encodedToken = localStorage.getItem("encodedToken")
  //     const headers = {
  //         headers: {
  //             authorization: encodedToken
  //         }
  //     }
  //     const response = await axios.get(cartApiUrl, headers)
  //     if (response.status === 200 || 201) {
  //         const response = await axios.post(cartApiUrl, requestBody, headers)
  //         cartItem(response.data.cart.length)
  //     }

  // }
  // useEffect(() => {
  //     (async () => {
  //         getCartHandler()
  //     })();

  // }, []);
  return (
    <nav className="navbar-wrapper">
      <Link className="flipcart-text" to="/landing-page">
        {" "}
        Flipcart{" "}
      </Link>
      <div className="navbar-products-link-wrapper">
        <Link className="navbar-products-link" to="/product-page">
          Products
        </Link>
      </div>
      <div className="navbar-input-wrapper">
        <input
          placeholder="Seach Flipcart.."
          className="navbar-input"
          type="text"
          onChange={(e) => inputValueHandler(e)}
        />
        <span className="search-icon-wrapper">
          <a className="search-icon" href="/">
            <ImSearch />
          </a>
        </span>
      </div>{" "}
      <div className="navbar-links-wrapper">
        <li>
          <Link className="navbar-links sign-up" to="/login-page">
            Sign In{" "}
          </Link>{" "}
        </li>{" "}
        <div className="navbar-icon-links-wrapper">
          <Cart />
          <Wishlist />
        </div>{" "}
      </div>{" "}
    </nav>
  );
};
// export const SeachInputForProduct = () => {
//   const contex = useContext(AppContext);
//   const { dispatch } = contex;
//   const inputValueHandler = (e) => {
//     dispatch({ type: "search_query", payload: e.target.value });
//   };
//   return (
//     <div className="product-input-wrapper">
//       <input
//         placeholder="Seach Flipcart.."
//         className="product-input"
//         type="text"
//         onChange={(e) => inputValueHandler(e)}
//       />
//       <span className="input-search-icon-wrapper">
//         <a className="input-search-icon" href="/">
//           <ImSearch />
//         </a>
//       </span>
//     </div>
//   );
// };
export const NavbarLinks = () => {
  const [categoryData, setCategoryData] = useState({});
  const context = useContext(AppContext);
  const { dispatch } = context;
  const categoryApi = "/api/categories";
  useEffect(() => {
    getData(categoryApi, setCategoryData);
  }, []);
  return (
    <div className="navbarLinks-wrapper">
      {categoryData.categories?.map((item) => {
        return (
          <Link className="navbar-bottom-links"
          onClick={()=>{
            dispatch({
              type: "SelectedCategories",
              payload: [item.categoryName],
            });
          }}
          key={item.id} to="/product-page">
            {item.categoryName}{" "}
          </Link>
        );
      })}
    </div>
  );
};
export const ResponsiveNavbar = () => {
  const contex = useContext(AppContext);
  const { dispatch } = contex;
  const inputValueHandler = (e) => {
    dispatch({ type: "search_query", payload: e.target.value });
  };
  return (
    <nav className="responsiveNavbar">
      <div className="phone-view-input-wrapper">
        <Link className="flipcart-text-ph" to="/landing-page">
          {" "}
          Flipcart{" "}
        </Link>
        <Link className="navbar-products-link-ph" to="/product-page">
          Products
        </Link>
        {/* <input
          type="text"
          placeholder="search flicart"
          className="phn-view-input"
          onChange={(e) => inputValueHandler(e)}
        />
        <span className="search-icon-ph-wrapper">
          <ImSearch className="search-icon-ph" />
        </span> */}
        <div className="responsive-navbar-icon-links-wrapper">
          <Link className="navbar-links sign-up" to="/login-page">
            Sign In{" "}
          </Link>{" "}
          <Cart />
          <Wishlist />
        </div>{" "}
      </div>
    </nav>
  );
};
