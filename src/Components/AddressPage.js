import "./AddressPage.css";
import { Layout } from "./Layout";
export const AddressPage = () => {
  return (
    <Layout>
      <div className="addressPage-container">
        <h3>Address</h3>
        <div>
          <input className="addressPage-input" placeholder="Name"></input>
        </div>
        <div>
          <input
            type="number"
            className="addressPage-input"
            placeholder="Mobile"
          ></input>
        </div>
        <div>
          <input
            type="number"
            className="addressPage-input"
            placeholder="Pin Code"
          ></input>
        </div>
        <div>
          <input
            className="addressPage-input"
            placeholder="Locality/Area/Street"
          ></input>
        </div>
        <div>
          <input
            className="addressPage-input"
            placeholder="Flat number Building Name"
          ></input>
        </div>
        <div>
          <input className="addressPage-input" placeholder="Landmark"></input>
        </div>
        <div>
          <input
            className="addressPage-input"
            placeholder="District/City"
          ></input>
        </div>
        <div>
          <input className="addressPage-input" placeholder="State"></input>
        </div>
        <button className="address-save-btn">Save</button>
      </div>
    </Layout>
  );
};
