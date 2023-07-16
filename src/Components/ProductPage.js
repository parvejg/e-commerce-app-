import { useEffect, useState } from "react";
import { Layout } from "./Layout";
import { Sidebar } from "./Sidebar";
import { ProductDemoCard3 } from "./Card";
import "./ProductPage.css";
import { ToggalBtn } from "./ToggalBtn";
import { getData } from "./reusableFunction";

export const ProductPage = () => {
  const [cardAPI, SetCardAPI] = useState({});
  const cardMockBeeAPI = "/api/products";
  useEffect(() => {

    // fetch(cardMockBeeAPI)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     SetCardAPI(data.products);
    //   });
    getData(cardMockBeeAPI, SetCardAPI);
  }, []);

  return (
    <Layout>
      <ToggalBtn />
      <div className="sidebar-and-productContent-wrapper">
        <Sidebar />
        <div className="product-content-wrapper">
          {cardAPI.products?.map((cardDetail) => {
            return (
              <div  key={cardDetail.id} >
                <ProductDemoCard3 cardDetail={cardDetail} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
