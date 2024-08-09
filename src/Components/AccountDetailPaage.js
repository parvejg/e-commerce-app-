import { Layout } from "../Components/Layout";
import "./AccountDetailPage.css";
import { AddressCard } from "./AddressCard";
export const AccountDetails = () => {
  return (
    <Layout>
      <div className="account-details-main-wrapper">
        <div className="accountDetails-wrapper">
          <a href="#">My Account</a>
          <a href="#">Orders</a>
          <a href="#">Address</a>
          <a href="#">Settings</a>
        </div>
        <div className="display-Account-details-container">
          <div className="personal-info">
            <h2>personal information</h2>
            <p className="name-txt"> Name: Parvez</p>
            <p className="gmail-txt"> Gmail: xyz@gmail.com</p>
          </div>
          <div className="order-info">
            <h2>My order</h2>
            <p>No order Available!</p>
          </div>
          <div className="address-info">
            <button>Click to add new address</button>
          </div>
          <div className="settings-info">
            <p>My settings</p>
            <button>Logout</button>
          </div>
          <div className="old-address-info">
            <button>Click to add new address</button>

            <p>Name</p>
            <p>6398823209</p>
            <p>District</p>
            <p>Land mark</p>
            <p>district state</p>
            <div className="address-edit-delete-btns">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
          <AddressCard />
        </div>
        <h3>My Account Details</h3>
      </div>
    </Layout>
  );
};
