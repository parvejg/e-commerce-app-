import "./ConfirmedOrderCard.css"
export const ConfirmedOrderCard = ()=>{
   return<div className="confirmedOrderCard-wrapper">
      <div className="total-price-container">
         <p>Confirmed order</p>
         <b>Total price: 454</b>
      </div>
      <div className="confirmedOrderCard">
<div className="orderedCardImg-wrapper">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTGJkTCAynvkHpw55GRWkhp_xohj65ApAoibR22UxYBtieCuD6eLYTGBwedFD08U7Kck&usqp=CAU" />
</div>
<div className="confirmed-order-content-wrapper">
   <p>Title LEVIS Slim Fit Washed Jeans</p>
   <p>Ship To:<b>Parvez</b></p>
   <p>Land mark & district</p>
   <p>Price: 678</p>
   <p>Color: red  </p>
   <p>Quantity: 1</p>
</div>
      </div>
   </div>
}