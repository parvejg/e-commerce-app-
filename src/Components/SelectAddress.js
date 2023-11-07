import { Link } from "react-router-dom";
import "./SelectAddress.css";
import { Layout } from "./Layout";
export const SelectAddress = () => {
  return (
    <Layout>
      <div className="selectAddress-container">
        <h2>Select address </h2>
        <div className="addresLink-wrapper">
          <h2>You don't have any Address</h2>
          <Link className="address-link" to="/address-page">
            Click here to add any Address!
          </Link>
        </div>
      </div>
    </Layout>
  );
};
