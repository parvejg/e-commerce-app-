import {Layout} from "./Layout";
import "./WishlistAndCartPage.css";
export const CartPage = () => {


    return <Layout>
        <div className="cartPage-wrapper">
            <div className="cart-wrapper">
                <h2 className="cart-text">cart</h2>

                <div className="product-cart-box">
                    <p>Empty your cart</p>
                </div>
                <div className="cart-total-price-wrapper">
                    <h2 className="total-text">Total</h2>
                    <h3 className="cart-price">$0</h3>
                </div>
            </div>
        </div>
    </Layout>
}
export const WishlistPage = () => {


    return <Layout>
        <div className="wishlistPage-wrapper">
            <div className="wishlist-wrapper">
                <h3 Wishlist-text>My Wishlist</h3>
                <h3 Wishlist-text>(0 item)</h3>
            </div>
        </div>
    </Layout>
}
