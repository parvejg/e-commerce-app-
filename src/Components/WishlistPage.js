import { Layout } from "./Layout";
import "./WishlistAndCartPage.css";
import { AppContext } from "./UseContex";
import { useContext, useEffect } from "react";
import { WISHLIST_DATA } from "../Constants";
import { fetchWishlist } from "../ApiMethods";
import { WishlistCard } from "./WishlistCard";
import { WISHLIST_PAGE_IMG } from "../ImageUrl";

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
  