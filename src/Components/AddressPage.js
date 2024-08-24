import { useContext, useState } from "react";
import "./AddressPage.css";
import { Layout } from "./Layout";
import { AppContext } from "./UseContex";
export const AddressPage = () => {
  const contex = useContext(AppContext);
  const { state , dispatch} = contex;
  // const [userData, setUserData] = useState([]);
  //   const addressHandler = () => {
  //   let userDataObj = {};
  //   if (userData) {
  //     userDataObj.id = userData.length + 1;
  //     userDataObj.text = userData;
  //   }
  //   setUserData(...userData, userDataObj);
  // console.log(userDataObj)

  //   setUserData("");
  // };
  
  const [newAddress, setNewAddress] = useState({
    name:"",
    mobile: "",
    pincode: "",
    district: "",
    landMark: "",
    state: "",
    id: state.addressList?.length === 0 ? 1 : state.addressList?.length + 1
  })
  const addAddressHandler =(e)=>{
      dispatch({type: "address_list" , payload: [...state.addressList , newAddress]})
      setNewAddress({
        name:"",
        mobile: "",
        pincode: "",
        district: "",
        landMark: "",
        state: "",
        id: state.addressList?.length === 0 ? 1 : state.addressList?.length + 1
      })

  }
  return (
    <Layout>
      <div className="addressPage-main-wrapper">
        <div className="addressPage-container">
          <h3>Address</h3>
          <div>
            <input value={newAddress.name}
            onChange={(e)=>setNewAddress({...newAddress , name: e.target.value})}
              className="addressPage-input"
              placeholder="Name"
            ></input>
          </div>
          <div>
            <input value={newAddress.mobile}
            
            onChange={(e)=>setNewAddress({...newAddress ,mobile: e.target.value})}

              type="number"
              className="addressPage-input"
              placeholder="Mobile"
            ></input>
          </div>
          <div>
            <input
            value={newAddress.pincode}
            onChange={(e)=>setNewAddress({...newAddress , pincode: e.target.value})}

              type="number"
              className="addressPage-input"
              placeholder="Pin Code"
            ></input>
          </div>
          <div>
            <input
            value={newAddress.district}
            onChange={(e)=>setNewAddress({...newAddress , district: e.target.value})}

              className="addressPage-input"
              placeholder="District"
            ></input>
          </div>
          <div>
            <input
            value={newAddress.landMark}
            onChange={(e)=>setNewAddress({...newAddress , landMark: e.target.value})}

              className="addressPage-input"
              placeholder="Landmark"
            ></input>
          </div>
  
        
          <div>
            <input
            value={newAddress.state}
            onChange={(e)=>setNewAddress({...newAddress , state: e.target.value})}
            
              className="addressPage-input"
              placeholder="State"
            ></input>
          </div>
          <button disabled={!newAddress.name && !newAddress.district && !newAddress.landMark && !newAddress.state && !newAddress.pincode && !newAddress.mobile } className="address-save-btn"onClick={addAddressHandler} >
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
};
