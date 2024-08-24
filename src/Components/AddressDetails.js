import { AddressCard } from "./AddressCard"
import { Link } from "react-router-dom";
import "./AddressDetails.css";
import { useContext } from "react";
import { AppContext } from "./UseContex";
export const AddressDetails = ()=>{ 
  const context = useContext(AppContext)
  const {state } = context
  const {addressList} = state
    return<div className="address-details-wrapper">
            <div className="address-info">
              <Link to="/address-page" className="address-link">Click to add new address</Link>
            </div>
            <AddressCard addressList = {addressList} />
    </div>
}