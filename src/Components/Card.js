import { AiOutlineStar } from "react-icons/ai";
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
    <div className="card-container">
      <div className="productCard-wrapper">
        <div className="productCard">
          <img
            className="listing-img"
            src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGUlMjBjb21tZXJjZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          />
          <p>Product name and brand</p>
          <ul className="star-icon-container">
           <li><a  className="star-icon"href="/"><AiOutlineStar/></a></li>
           <li><a  className="star-icon"href="/"><AiOutlineStar/></a></li>
           <li><a  className="star-icon"href="/"><AiOutlineStar/></a></li>
           <li><a  className="star-icon"href="/"><AiOutlineStar/></a></li>
           <li><a  className="star-icon"href="/"><AiOutlineStar/></a></li>
          </ul>
          <h6 className="product-price">product price</h6>
          <a className="buyNow-btn" href="/">
            Buy Now
          </a>
         
        </div>
      </div>
    </div>
  );
};
