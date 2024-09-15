import { RxCross2 } from "react-icons/rx";
import "./AddressCard.css";
import { AppContext } from "./UseContex";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export const AddressCard = () => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const navigate = useNavigate();
  const addressDeleteHandler = (id) => {
    const updatedAddressList = state.addressList.filter(
      (addre) => addre.id !== id
    );
    dispatch({ type: "address_list", payload: updatedAddressList });
  };

  return (
    <>
      {state.addressList?.map((address) => {
        return (
          <div>
            <div className="address-card-container">
              <RxCross2
                className="cross-btnIcon-addressCard"
                onClick={() => addressDeleteHandler(address.id)}
              />
              <div className="address-card">
                <input type="radio" id="select-address" />
                <br />

                <label for="select-address" className="addressCard-name">
                  {address.name}
                </label>
                <p>{address.mobile}</p>
                <p> {address.pincode} </p>
                <p>{address.district}</p>
                <p>{address.landMark}</p>
                <div className="addressCard-edit-delete-btns">
                  <button
                    onClick={() => {
                      navigate("/address-page");
                      dispatch({type: "selectedAddressId" , payload: address.id})
                    }}
                  >
                    Edit
                  </button>
                  <button 
                onClick={() =>{  navigate("/delete-popup-page")}}
                  
                  >Delete</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
