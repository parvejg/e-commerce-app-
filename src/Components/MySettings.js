import { ConfirmedOrderCard } from "./ConfirmedOrderCard"
import "./MySettings.css"
import { DeletePopup } from "./Popups"
export const MySettings =()=>{
    return <div>
            <div className="settings-info">
              <h2>My settings</h2>
              <button>Logout</button>
            </div>
           <DeletePopup/>
    </div>
}