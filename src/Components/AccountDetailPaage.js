import { useState } from "react";
import { Layout } from "../Components/Layout";
import "./AccountDetailPage.css";
import { PersonalInfo } from "./PersonalInformation";
import { OrderDetails } from "./OrderDetails";
import { AddressDetails } from "./AddressDetails";
import { MySettings } from "./MySettings";
import { AddressCard } from "./AddressCard";
export const AccountDetails = () => {
  const [activeKey, setactiveKey] = useState(1);
  return (
    <Layout>
      <div className="account-details-main-wrapper">
        <div className="accountDetails-wrapper">
          <a href="#" onClick={() => setactiveKey(1)}>
            My Account
          </a>
          <a href="#" onClick={() => setactiveKey(2)}>
            Orders
          </a>
          <a href="#" onClick={() => setactiveKey(3)}>
            Address
          </a>
          <a href="#" onClick={() => setactiveKey(4)}>
            Settings
          </a>
        </div>
    <div className="display-Account-details-container">
      <h3 style={{color: "#f94f39"}}>My Account Details</h3>
     { activeKey === 1 &&  <PersonalInfo />}
     { activeKey === 2 &&  <OrderDetails/>}
     { activeKey === 3 && <AddressDetails/>}
     { activeKey === 4 &&  <MySettings/>}
        </div>
      </div>
    </Layout>
  );
};
