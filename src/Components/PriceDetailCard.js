import { Link } from "react-router-dom";

export const PriceDetailCard = (props) => {
  const { cartList } = props;
  let total_price = cartList.reduce((initialValue, currEle) => {
    let { price, qty } = currEle;
    initialValue = initialValue + price * qty;
    return initialValue;
  }, 0);
  return (
    <div className="price-details-container">
      <Link className="sele-address-btn">Select Address</Link>
      <h2>PRICE DETAILS</h2>

      <div className="cartPrice-container">
        {cartList.map((item) => {
          return (
            <p>
              {item.title}........,{item.price},,,(item {item.qty})
            </p>
          );
        })}
      </div>
      <div className="cartTotalPrice-container">
        <h2 className="cart-price-text">
          Total Price <span className="priceInWords">{total_price}</span>
        </h2>
      </div>
      <Link className="proceedTo-shipping-btn" to="/address-page">
        PROCEED TO SHIPPING
      </Link>
    </div>
  );
};
