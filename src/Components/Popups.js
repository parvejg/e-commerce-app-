import { FcOk } from "react-icons/fc";
import "./Popup.css"
import { Layout } from "./Layout";
export const DeletePopup = ()=>{
   return<Layout>
   <div className="delete-popup-wrapper">
      <div className="delete-popup">
         <h3>Are you sure you want to delete?</h3>
         <div className="delete-cancel-btn-wrapper">
            <button>Delete</button>
            <button>Cancel</button>
         </div>
      </div>
   </div>
   </Layout>
}
export const SuccessfullOrderPopup = () =>{
   return <div className="orderPopup-wrapper">
<div className="orderPopup">
   <FcOk className="confirmed-order-icon" />
            <h2>Your Order is Confirmed!</h2>
            <p>We'll send you a shipping confirmation email as soon as your order ships.</p>
            <button>View your orders</button>
</div>
   </div>
}