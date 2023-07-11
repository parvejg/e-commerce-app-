import { AiOutlineStar } from "react-icons/ai";
import {FiStar} from "react-icons/fi"
import "./Card.css";
// export const ProductDemoCard1 = (props) => {
//   const { src, alt } = props;
//   return (
//     <selection className="product-demo-container">
//       <div className="product-img-container">
//         <img
//           className="product-img"
//           alt={`product-img ${alt}`}
//           src={
//             src
//               ? src
//               : "https://media.istockphoto.com/id/679539190/photo/indian-made-mens-shoes.jpg?s=612x612&w=0&k=20&c=1wTYVNCgSpNcnzfLxPzjfd1swEWXnUZHKzikNupEaWk="
//           }
//         />
//       </div>
//       <div className="product-price-container">
//         <h3 className="product-price">Price 7999</h3>
//       </div>
//       <div className="product-titel-container">
//         <h4 className="product-demo-text">Sneakers For Men (Brown)</h4>
//       </div>
//       <div className="Buy-now-btn-wrapper">
//         <button className="buy-now-btn">Buy Now</button>
//         <button className="cart-btn">Add To Cart</button>
//       </div>
//     </selection>
//   );
// };

export const ProductDemoCard3 = () => {
  return (
    <div className="productListingCard-wrapper">
      <img
        className="listing-img"
        alt="listingCard-img"
        src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      />
      <p className="productListingCard-text">Product name and brand</p>
     
      <h6 className="productListingCard-text">product price</h6>
      <a className="listingCard-buyNow-btn" href="/">
        Buy Now
      </a>
    </div>
  );
};
export const DetailCard=()=>{
  return <div className="detail-card-wrapper">
  
<img  className="detail-card-img" alt="detail-card" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS53IAKzS5GMXU5LqySwR2zfikrYXhdBaUnkogB2COznNPC7OnN5zmfg3NENJjqaxNUoxs&usqp=CAU" />
<div className="detail-cart-content">
  <h3>Women Jackets - Buy Branded Jackets For Women.</h3>
  <p>Specs: Spread collar Full button placket Two waist pocketsLong sleeves with buttoned cuffs Solid Country of Origin - India</p>
</div>
</div>
}
export const DetailCard2=()=>{
  return <div className="detail-card-wrapper">
  
<img  className="detail-card-img" alt="detail-card" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKU9jiFmNyZlHrB8YcLImAt5KSDdPHGYM0Nw&usqp=CAU" />
<div className="detail-cart-content">
  <h3>Women Jackets - Buy Branded Jackets For Women.</h3>
  <p>Specs: Spread collar Full button placket Two waist pocketsLong sleeves with buttoned cuffs Solid Country of Origin - India</p>
</div>
</div>
}