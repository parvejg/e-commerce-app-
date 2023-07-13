import { DetailCard, DetailCard2, ProductDemoCard3 } from "./Card";
import "./LandingPage.css";
import { TopWebShoesImg } from "./Images";
import { Layout } from "./Layout";
import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
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

