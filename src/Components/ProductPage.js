import { useContext, useEffect, useState } from "react";
import { Layout } from "./Layout";
import { Sidebar } from "./Sidebar";
import { ProductDemoCard3 } from "./Card";
import "./ProductPage.css";
import { ToggalBtn } from "./ToggalBtn";
import { getData } from "./reusableFunction";
import { AppContext } from "./UseContex";

export const ProductPage = () => {
  const contex = useContext(AppContext);
  const { state } = contex;
  const [cardAPI, SetCardAPI] = useState({});

  const productFilterData = cardAPI.products?.filter((item) =>
    item.title.toLowerCase().includes(state.searchQuery.trim().toLowerCase())
  );
  const categoryWiseFilteredProducts = productFilterData?.filter((item) =>
    state.selectedCategories?.includes(item.categoryName)
  );
  const productList =
    state.selectedCategories?.length === 0
      ? productFilterData
      : categoryWiseFilteredProducts;
  const sortProductByPriceHandler = () => {
    let list = [];
    if (state.sortQuery === "high-to-low") {
      list = productList.sort((a, b) => b.price - a.price);
    }
    if (state.sortQuery === "low-to-high") {
      list = productList.sort((a, b) => a.price - b.price);
    }
    return list;
  };
  const productListSortedByPrice = state.sortQuery
    ? sortProductByPriceHandler()
    : productList;

  const productAPIUrl = "/api/products";
  useEffect(() => {
    // fetch(productAPIUrl)
    // .then((res) => res.json())
    // .then((data) => {
    //     SetCardAPI(data.products);
    // });
    getData(productAPIUrl, SetCardAPI);
  }, []);

  return (
    <Layout>
      <ToggalBtn />
      <div className="sidebar-and-productContent-wrapper">
        <Sidebar />
        <div className="product-content-wrapper">
          {productListSortedByPrice?.map((cardDetail) => {
            return (
              <div key={cardDetail.id}>
                <ProductDemoCard3 cardDetail={cardDetail} />
              </div>
            );
          })}{" "}
        </div>
      </div>
    </Layout>
  );
};
