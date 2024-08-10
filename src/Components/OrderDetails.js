import { SuccessfullOrderPopup } from "./Popups"
import "./OrderDetails.css"
import { ConfirmedOrderCard } from "./ConfirmedOrderCard"
export const OrderDetails = ()=>{
    return<div>
            <div className="order-info">
              <h2>My order</h2>
              <p>No order Available!</p>
            </div>
           <SuccessfullOrderPopup/>
           <ConfirmedOrderCard/>

    </div>
}