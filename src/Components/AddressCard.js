import { RxCross2 } from "react-icons/rx";
import "./AddressCard.css";
import { AppContext } from "./UseContex";
import { useContext } from "react";
export const AddressCard = () => {
 const context = useContext(AppContext)
 const {state} = context;
  return (
    <>
    {
      state.addressList?.map((address)=>{
        return <div>
    <div className="address-card-container">
      <RxCross2 className="cross-btnIcon-addressCard"/>
      <div className="address-card">
        <input type="radio" id="select-address" />
        <br />
       
            <label for="select-address" className="addressCard-name">{address.name}</label>
            <p>{address.mobile}</p>
            <p> {address.pincode} </p>
            <p>{address.district}</p>
            <p>{address.landMark}</p>
            <div className="addressCard-edit-delete-btns">
              <button>Edit</button>
              <button>Delete</button>
            </div>
            </div>
       
      </div>

    </div>
  })
}

</>);
};
