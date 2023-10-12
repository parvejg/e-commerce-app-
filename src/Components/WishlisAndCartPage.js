import { Layout } from "./Layout";
import "./WishlistAndCartPage.css";
export const CartPage = () => {
  return (
    <Layout>
      <div className="cartPage-container">
        <div className="cart-img-container">
          <img
            className="cartPage-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyc4SRtcqPPJBgBEci3rzPAj-_yZU02gw_A&usqp=CAU"
          />
        </div>
        <div className="cart-info">
          <h2>Title</h2>
          <h3>Sub Title</h3>
          <p>Price</p>
          <p className="quantity-text">
            Quantity <button className="cart-inc-dec-btn">-</button> 0{" "}
            <button className="cart-inc-dec-btn">+</button>
          </p>
          <div className="cartBtn-container">
            <button className="cartBtn">Remove from Cart</button>
            <button className="cartBtn">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export const WishlistPage = () => {
  return (
    <Layout>
      <div className="wishlistPage-wrapper">
        <div className="wishlist-wrapper">
          <h3 Wishlist-text>My Wishlist</h3>
          <h3 Wishlist-text>(0 item)</h3>
        </div>
      </div>
    </Layout>
  );
};
