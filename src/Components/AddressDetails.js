import { AddressCard } from "./AddressCard"
import "./AddressDetails.css";
export const AddressDetails = ()=>{
    return<div className="address-details-wrapper">
            <div className="address-info">
              <button>Click to add new address</button>
            </div>
            <AddressCard />
            <AddressCard />
            <AddressCard />
            <AddressCard />
            <AddressCard />
            <AddressCard />
    </div>
}