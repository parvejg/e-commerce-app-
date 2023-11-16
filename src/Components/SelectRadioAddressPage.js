import { useEffect, useState } from "react";
import { Layout } from "./Layout";
import "./SelectRadioAddress.css";
import axios from "axios";
export const SelectRadioAddress = () => {
  const [addressdata, setAddressData] = useState([]);
  const encodedToken = localStorage.getItem("encodedToken");
  const requestHeaders = {
    headers: {
      authorization: encodedToken,
    },
  };
  const addressAPi = "/api/user/address";
  useEffect(() => {
    async function fetchData() {
      const getAddressData = await axios.get(addressAPi, requestHeaders);
      setAddressData(getAddressData);
      console.log(getAddressData);
    }
    fetchData();
  }, []);

  console.log(addressdata);
  return (
    <Layout>
      <div className="radioAddress-container">
        <h2>Select Address</h2>
        <input type="radio" id="addressRadioInput" />

        <label for="addressRadioInput" value="My Name">
          Name:
        </label>
        <div>
          <p>Mobile:</p>
          <p>Pin:</p>
          <p>Landmark:</p>
          <p>City:</p>
        </div>
        <div className="address-btn-wrapper">
          <button className="address-edit-btn">EDIt</button>
          <button className="remove-address-btn">REMOVE</button>
        </div>
        <div className="close-btn-wrapper">
          <button className="addressPage-closeBtn">Close</button>
        </div>
      </div>
    </Layout>
  );
};
