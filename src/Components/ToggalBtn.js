import { AiOutlineUnorderedList } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import "./ToggalBtn.css";
import { Sidebar } from "./Sidebar";

export const ToggalBtn = () => {
  return (
    <div className="toggal-btn-wrapper">
      <input type="checkbox" id="check" />

      <div className="btns-wrapper">
      <div className="btn-one-wrapper">
        <label for="check" className="toggal-btn">
          <AiOutlineUnorderedList className="toggal-icon" />
        </label>
      </div>
     <div className="btn-two-wrapper">
        <label for="check" className="cross-btn">
          <RxCross2 className="cross-icon" />
        </label>
      </div>

      </div>
     
     <div className="toggal-btn-sidebar-wrapper">
     <Sidebar/>
     </div>
    </div>
  );
};
