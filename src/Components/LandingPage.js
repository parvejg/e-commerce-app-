import { DetailCard, DetailCard2, ProductDemoCard3 } from "./Card";
import "./LandingPage.css";
import { TopWebShoesImg } from "./Images";
import { Layout } from "./Layout";
import { useEffect, useState } from "react";

export const LandingPage = () => {

  return (
    <Layout>
      <TopWebShoesImg />
      <div className="detail-card-in-landing-page">
        <DetailCard />
        <DetailCard2 />
      </div>
    </Layout>
  );
};

