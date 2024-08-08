import axios from "axios";
import { Layout } from "./Layout";
import "./WishlistAndCartPage.css";
import { AppContext } from "./UseContex";
import { CART_DATA } from "../Constants";
import { fetchCart } from "../ApiMethods";
import { CART_PAGE_IMG } from "../ImageUrl";
import { CART_ENDPOINT } from "../Endpoints";
import { useNavigate } from "react-router-dom";
import { PriceDetailCard } from "./PriceDetailCard";
import { CartProductsCard } from "./CartProductsCard";
import { useContext, useEffect, useState } from "react";


export const CartPage = () => {
  const [cartItem, setcartItem] = useState([]);
  const contex = useContext(AppContext);
  const { dispatch, state } = contex;
  const encodedToken = localStorage.getItem("encodedToken");
  let navigate = useNavigate();

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
      const response = await fetchCart();
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
          <snap className="cartPage-content">
            Cart is empty: Explore our collections and find something you love!
          </snap>
          <button
            onClick={() => {
              navigate("/product-page");
            }}
          >
            Ready to shop?
          </button>
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
