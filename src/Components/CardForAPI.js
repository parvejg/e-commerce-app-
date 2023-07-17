import { useEffect, useState } from "react";
import "./CardForAPI.css";
export const CardForApiData = () => {
  const [cardData, setCardData] = useState({});
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);
  return (
    <div className="apiCards">
      {cardData.products?.map((item) => {
        return (
          <div className="apicard-wrapper">
            <div className="apicard-img-wrapper">
              <img className="apicard-img" src={item.src} alt="apicard-img" />
              <h3 className="apicard-item-name">{item.title}</h3>
              <p className="apicard-description">{item.author}</p>
              <p className="apicard-price"> Price{item.price}</p>
              <button className="apicard-btn">Add to cart</button>
              <button className="apicard-btn">Add to wishlist</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
