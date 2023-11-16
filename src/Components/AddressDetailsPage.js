import { Link } from "react-router-dom";
import { Layout } from "./Layout";
import "./AddressDetailsPage.css";
export const MyAccount = () => {
  return (
    <Layout>
      <div className="account-page-container">
        <Link className="accountDetail-page-link">My Account</Link>
        <Link className="accountDetail-page-link">Order</Link>
        <Link className="accountDetail-page-link">Address</Link>
        <Link className="accountDetail-page-link">Cart</Link>
        <Link className="accountDetail-page-link">WishList</Link>
        <Link className="accountDetail-page-link">Setting</Link>
      </div>
    </Layout>
  );
};
