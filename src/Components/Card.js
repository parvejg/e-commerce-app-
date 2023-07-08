import "./Card.css";
export const ProductDemoCard = (props) => {
    const { src, alt } = props;
    return (
      <div className="product-demo-container">
        <div className="product-img-container">
          <img
            className="product-img"
            alt={`product-img ${alt}`}
            src={ 
              src
                ? src
                : "https://media.istockphoto.com/id/679539190/photo/indian-made-mens-shoes.jpg?s=612x612&w=0&k=20&c=1wTYVNCgSpNcnzfLxPzjfd1swEWXnUZHKzikNupEaWk="
            }
          />
        </div>
        <div className="product-price-container">
          <h3 className="product-price">Price 7999</h3>
        </div>
        <div className="product-titel-container">
          <h4 className="product-demo-text">Sneakers For Men  (Brown)</h4>
        </div>
        <div className="Buy-now-btn-wrapper">
          <button className="buy-now-btn">Buy Now</button>
          <button className="cart-btn">Add To Cart</button>
        </div>
      </div>
    );
  };