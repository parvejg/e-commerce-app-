import { useEffect, useState } from "react";
import { Layout } from "./Layout";
import { Sidebar } from "./Sidebar";
import { ProductDemoCard3 } from "./Card";
import "./ProductPage.css";
import { ToggalBtn } from "./ToggalBtn";

export const ProductPage = () => {
  const [cardAPI, SetCardAPI] = useState([]);
  const cardMockBeeAPI = "/api/products";
  useEffect(() => {
    fetch(cardMockBeeAPI)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        SetCardAPI(data.products);
      });
  }, []);
  return (
    <Layout>
      <ToggalBtn/>
      <div className="sidebar-and-productContent-wrapper">
      <Sidebar />
      <div className="product-content-wrapper">
        {cardAPI.map((cardDetail) => {
          return <div>
            <ProductDemoCard3 key={cardDetail.id} cardDetail={cardDetail}/>
          </div>
        })}
      </div>
      </div>
     
    </Layout>
  );
};
