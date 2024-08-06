import axios from "axios";
import { Layout } from "./Layout";
import "./WishlistAndCartPage.css";
import { useContext, useEffect, useState } from "react";
import { PriceDetailCard } from "./PriceDetailCard";
import { CartProductsCard } from "./CartProductsCard";
import { WishlistCard } from "./WishlistCard";
import { AppContext } from "./UseContex";
import { CART_DATA, WISHLIST_DATA } from "../Constants";
import { CART_PAGE_IMG, WISHLIST_PAGE_IMG } from "../ImageUrl";
import { fetchCart, fetchWishlist } from "../ApiMethods";
import { CART_ENDPOINT } from "../Endpoints";

export const CartPage = (props) => {
  const [cartItem, setcartItem] = useState([]);
  const contex = useContext(AppContext);
  const { dispatch, state } = contex;
  const encodedToken = localStorage.getItem("encodedToken");
  const headers = {
    headers: {
      authorization: encodedToken,
    },
  };
  async function deleteCartHandler(_id) {
    const endpoint = `${CART_ENDPOINT}/${_id}`;
    const response = await axios.delete(endpoint, headers);
    setcartItem(response.data.cart);
    dispatch({ type: CART_DATA, payload: response.data.cart });
  }
  useEffect(() => {
    async function getCartData() {
      const response = await fetchCart()
      const cartData = response.data.cart;
      setcartItem(cartData);
      dispatch({ type: CART_DATA, payload: response.data.cart });
    }
    getCartData();
  }, []);
  return (
    <Layout>
      {!cartItem?.length ? (
        <div className="empty-cart-container">
          <h1>Your cart is empty</h1>
          <img src={CART_PAGE_IMG} />
        </div>
      ) : (
        <div className="cart-ProductsPage-Container">
          <PriceDetailCard cartList={cartItem} />
          <div className="cart-product-list-container">
            {state.cartList?.map((cartItems) => {
              return (
                <CartProductsCard
                  cartItem={cartItems}
                  setcartItem={setcartItem}
                  deleteCartHandler={() => deleteCartHandler(cartItem._id)}
                />
              );
            })}
          </div>
        </div>
      )}
    </Layout>
  );
};
export const WishlistPage = () => {
  const contex = useContext(AppContext);
  const { dispatch, state } = contex;
  const { wishlistList } = state;
  const encodedToken = localStorage.getItem("encodedToken");
  const headers = {
    headers: {
      authorization: encodedToken,
    },
  };
  useEffect(() => {
    async function getCartData() {
      const response = await fetchWishlist();
      const wishlistData = response.data.wishlist;
      dispatch({ type: WISHLIST_DATA, payload: wishlistData });
    }
    getCartData();
  }, []);
  return (
    <Layout>
      {!wishlistList?.length ? (
        <div className="wihlistEmpty-page-container">
          <div className="empty-wishlist-img-container">
            <h2> your wishlist is empty</h2>
            <img src={WISHLIST_PAGE_IMG} />
          </div>
        </div>
      ) : (
        <div className="wihslist-page-wrapper">
          {state.wishlistList?.map((wishItem) => {
            return <WishlistCard wishlistList={wishItem} />;
          })}
        </div>
      )}
    </Layout>
  );
};
