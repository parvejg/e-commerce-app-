import { Layout } from "./Layout";
import "./WishlistAndCartPage.css";
import { AppContext } from "./UseContex";
import { useContext, useEffect } from "react";
import { WISHLIST_DATA } from "../Constants";
import { fetchWishlist } from "../ApiMethods";
import { WishlistCard } from "./WishlistCard";
import { WISHLIST_PAGE_IMG } from "../ImageUrl";
import { useNavigate } from "react-router-dom";

export const WishlistPage = () => {
    const contex = useContext(AppContext);
    const { dispatch, state } = contex;
    const { wishlistList } = state;
  let navigate = useNavigate();

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
              <img src={WISHLIST_PAGE_IMG} />
            </div>
              <snap className="wishlist-content">Wishlist is empty: start shopping now and discover our latest deals:</snap>
              <button onClick={()=>{navigate("/product-page")}} >Ready to shop?</button>
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
  