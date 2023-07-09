import { WebFooter } from "./Footer";
import { Navbar, NavbarLinks } from "./Navbar";
import "./Layout.css";
import { TopWebShoesImg } from "./Images";
import { ProductDemoCard1, ProductDemoCard2, ProductDemoCard3 } from "./Card";
export const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <NavbarLinks/>
      <TopWebShoesImg/>
      <ProductDemoCard1/>
      <ProductDemoCard2/>
      <ProductDemoCard3/>
      <div className="layout-body">
        <div className="layout-content">{children}</div>
      </div>
      <WebFooter />
    </div>
  );
};
