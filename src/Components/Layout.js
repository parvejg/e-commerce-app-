import { WebFooter } from "./Footer";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import "./Layout.css";
export const Layout = ({ children }) => {
    return (
      <div className="layout-wrapper">
        <Navbar/>
        <div className="layout-body">
          <Sidebar />
          <div  className="layout-content">
            {children}
          </div>
        </div>
        <WebFooter />
      </div>
    );
  };