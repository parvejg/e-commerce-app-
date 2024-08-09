import { RxCross2 } from "react-icons/rx";
import "./AddressCard.css";
export const AddressCard = () => {
  return (
    <div className="address-card-container">
      <RxCross2 className="cross-btnIcon-addressCard"/>
      <div className="address-card">
        <input type="radio" id="select-address" />
        <br />
        <label for="select-address" className="addressCard-name">Name</label>
        <p>6398823209</p>
        <p>District</p>
        <p>Land mark</p>
        <p>district state</p>
        <div className="addressCard-edit-delete-btns">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};
