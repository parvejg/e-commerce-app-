import { useContext, useEffect, useState } from "react";
import "./AddressPage.css";
import { Layout } from "./Layout";
import { AppContext } from "./UseContex";
import { useNavigate } from "react-router-dom";
export const AddressPage = () => {
  const contex = useContext(AppContext);
  const { state, dispatch } = contex;
  const navigate = useNavigate()

  const address = state.addressList.find((addre) => addre.id === Number(state.selectedAddressId));
  const [newAddress, setNewAddress] = useState({
    name: "",
    mobile: "",
    pincode: "",
    district: "",
    landMark: "",
    state: "",
    id: "",
  });

  const addAddressHandler = (e) => {
    dispatch({
      type: "address_list",
      payload: [...state.addressList, { ...newAddress, id: Math.random() }],
    });
    setNewAddress({
      name: "",
      mobile: "",
      pincode: "",
      district: "",
      landMark: "",
      state: "",
      id: "",
    });
  };

  const editAddressHandler = (e) => {
    let index = state.addressList.findIndex((adr) => adr.id === state.selectedAddressId);
    let updatedAddressList = [...state.addressList];
    let currAdr = updatedAddressList[index]
    console.log({index , updatedAddressList , currAdr});
    if(currAdr){
    currAdr.name = newAddress?.name;
    currAdr.mobile = newAddress?.mobile;
    currAdr.pincode = newAddress?.pincode;
    currAdr.district = newAddress?.district;
    currAdr.landMark = newAddress?.landMark;
    currAdr.state = newAddress?.state;
    
    }

    dispatch({
      type: "address_list",
      payload: updatedAddressList,
    });

    setNewAddress({
      name: "",
      mobile: "",
      pincode: "",
      district: "",
      landMark: "",
      state: "",
      id: "",
    });
  };
  useEffect(() => {
    if (state.selectedAddressId) {
      setNewAddress(address);
    }
  }, [state.selectedAddressId]);
  return (
    <Layout>
      <div className="addressPage-main-wrapper">
        <div className="addressPage-container">
          <h3>Address</h3>
          <div>
            <input
              value={newAddress?.name}
              onChange={(e) =>
                setNewAddress({ ...newAddress, name: e.target.value })
              }
              className="addressPage-input"
              placeholder="Name"
            ></input>
          </div>
          <div>
            <input
              value={newAddress?.mobile}
              onChange={(e) =>
                setNewAddress({ ...newAddress, mobile: e.target.value })
              }
              type="number"
              className="addressPage-input"
              placeholder="Mobile"
            ></input>
          </div>
          <div>
            <input
              value={newAddress?.pincode}
              onChange={(e) =>
                setNewAddress({ ...newAddress, pincode: e.target.value })
              }
              type="number"
              className="addressPage-input"
              placeholder="Pin Code"
            ></input>
          </div>
          <div>
            <input
              value={ newAddress?.district}
              onChange={(e) =>
                setNewAddress({ ...newAddress, district: e.target.value })
              }
              className="addressPage-input"
              placeholder="District"
            ></input>
          </div>
          <div>
            <input
              value={newAddress?.landMark}
              onChange={(e) =>
                setNewAddress({ ...newAddress, landMark: e.target.value })
              }
              className="addressPage-input"
              placeholder="Landmark"
            ></input>
          </div>

          <div>
            <input
              value={newAddress?.state}
              onChange={(e) =>
                setNewAddress({ ...newAddress, state: e.target.value })
              }
              className="addressPage-input"
              placeholder="State"
            ></input>
          </div>
          <button
            className="address-save-btn"
            onClick={() => { 
              if(Boolean(state.selectedAddressId)){
                return editAddressHandler()
              }else{
                addAddressHandler();
              }
            }}
          >
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
};
