import { WebFooter } from "./Footer";
import { Navbar } from "./Navbar";
import "./Layout.css";
export const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <div className="layout-body">
        <div className="layout-content">{children}</div>
      </div>
      <WebFooter />
    </div>
  );
};
