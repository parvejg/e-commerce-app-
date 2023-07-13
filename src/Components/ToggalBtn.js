import { AiOutlineUnorderedList } from "react-icons/ai";
import "./ToggalBtn.css";
export const ToggalBtn = () => {
  return (
    <div className="toggal-btn-wrapper">
      <button className="toggal-btn">
        <AiOutlineUnorderedList className="toggal-icon" />
      </button>
    </div>
  );
};
