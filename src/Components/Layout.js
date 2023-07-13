import { WebFooter } from "./Footer";
import { Navbar, NavbarLinks, ResponsiveNavbar } from "./Navbar";
import "./Layout.css";
import { Sidebar } from "./Sidebar";
import { ToggalBtn } from "./ToggalBtn";
export const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <NavbarLinks/>
      <ResponsiveNavbar/>
      <div className="layout-body">
        <div className="layout-content">{children}</div>
      </div>
      <WebFooter />
    </div>
  );
};
