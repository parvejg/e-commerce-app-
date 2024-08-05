import "./LandingPage.css";
import { DetailCard, DetailCard2 } from "./Card";
import { TopWebShoesImg } from "./Images";
import { Layout } from "./Layout";
import { NavbarLinks } from "./Navbar";
export const LandingPage = () => {
  return (
    <Layout>
      <NavbarLinks/>
      <TopWebShoesImg />
      <div className="detail-card-in-landing-page">
        <DetailCard />
        <DetailCard2 />
      </div>
    </Layout>
  );
};

