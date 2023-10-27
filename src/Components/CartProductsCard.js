import axios from "axios";

export const CartProductsCard = (props) => {
  const { deleteCartHandler, cartItem, setcartItem } = props;
  async function cartQtyHandler(_id, type) {
    const cartPostendPoint = `/api/user/cart/${_id}`;
    const encodedToken = localStorage.getItem("encodedToken");
    const headers = {
      headers: {
        authorization: encodedToken,
      },
    };
    const requestBody = {
      action: {
        type: type,
      },
    };
    const response = await axios.post(cartPostendPoint, requestBody, headers);
    setcartItem(response.data.cart);
  }
  return (
    <div className="cartPage-container">
      <div className="cart-img-container">
        <img alt="cartOfImg" className="cartPage-img" src={cartItem.src} />
      </div>
      <div className="cart-info">
        <h2>{cartItem.title}</h2>
        <h3>{cartItem.author}</h3>
        <p>{cartItem.price}</p>
        <p className="quantity-text">
          Quantity
          <button
            disabled={cartItem.qty === 1}
            className="cart-inc-dec-btn"
            onClick={() => {
              cartQtyHandler(cartItem._id, "decrement");
            }}
          >
            -
          </button>
          {cartItem.qty}
          <button
            className="cart-inc-dec-btn"
            onClick={() => {
              cartQtyHandler(cartItem._id, "increment");
            }}
          >
            +
          </button>
        </p>
        <div className="cartBtn-container">
          <button className="cartBtn" onClick={deleteCartHandler}>
            Remove from Cart
          </button>
          <button className="cartBtn">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};
