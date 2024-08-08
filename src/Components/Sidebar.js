import { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import { ImSearch } from "react-icons/im";
import { getData } from "./reusableFunction";
import { AppContext } from "./UseContex";

export const Sidebar = () => {
  const [categoryApiUrl, setCategoryApiUrl] = useState({});
  const categoryApi = "/api/categories";
  const context = useContext(AppContext);
  const { dispatch, state } = context;

  const selectCategoryHandler = (e, categoryObj) => {
    if (e.target.checked) {
      dispatch({
        type: "SelectedCategories",
        payload: [...state.selectedCategories, e.target.value],
      });
    } else {
      const categoriesFiltered = state.selectedCategories?.filter(
        (item) => item !== categoryObj.categoryName
      );
      dispatch({ type: "SelectedCategories", payload: categoriesFiltered });
    }
  };
  const setSortQueryHandler = (e) => {
    dispatch({ type: "sortQuery", payload: e.target.value });
  };
  const setSortRatingHandler = (e) => {
    dispatch({ type: "SelectedRating", payload: e.target.value });
  };
  useEffect(() => {
    getData(categoryApi, setCategoryApiUrl);
  }, []);

  return (
    <div className="sidebar-wrapper">
      <div className="filter-wrapper">
        <h2 className="filter-text">Filter</h2>
        <a className="clear-link" href="/">
          Clear
        </a>
      </div>
      <div className="sidebar-input-wrapper">
        <input placeholder="Seach.." className="sidebar-input" type="text" />
        <a href="/" className="sidebar-search-icon-wrapper">
          <ImSearch className="sidebar-search-icon" />
        </a>
      </div>
      <div className="sidebar-categories-wrapper">
        <h3>Categories</h3>
        {categoryApiUrl.categories?.map((item) => {
          return (
            <label for="categories-checkBox" key={item.id}>
              <input
                type="checkBox"
                id="categories-checkBox"
                name="categories"
                value={item.categoryName}
                onChange={(e) => selectCategoryHandler(e, item)}
              />{" "}
              {item.categoryName}{" "}
            </label>
          );
        })}{" "}
      </div>
      <div className="sidebar-rating-wrapper">
        <h3>Rating</h3>
        <label for="rating5-radio">
          <input
            type="radio"
            id="rating5-radio"
            name="ratingBox"
            value={5}
            onChange={(e) => setSortRatingHandler(e)}
          />
          5 Star & above
        </label>
        <label for="rating4-radio">
          <input
            type="radio"
            id="rating4-radio"
            name="ratingBox"
            value={4}
            onChange={(e) => setSortRatingHandler(e)}
          />
          4 Star & above
        </label>

        <label for="rating3-radio">
          <input
            type="radio"
            id="rating3-radio"
            name="ratingBox"
            value={3}
            onChange={(e) => setSortRatingHandler(e)}
          />
          3 Star & above
        </label>
        <label for="rating2-radio">
          <input
            type="radio"
            id="rating2-radio"
            name="ratingBox"
            value={2}
            onChange={(e) => setSortRatingHandler(e)}
          />
          2 Star & above
        </label>
        <label for="rating1-radio">
          <input
            type="radio"
            id="rating1-radio"
            name="ratingBox"
            value={1}
            onChange={(e) => setSortRatingHandler(e)}
          />
          1 Star & above
        </label>
      </div>
      <div className="sort-price-wrapper">
        <h3>Sort by Price</h3>

        <label for="low-to-high-radio">
          <input
            type="radio"
            id="low-to-high-radio"
            name="sort-price"
            value="low-to-high"
            onChange={(e) => setSortQueryHandler(e)}
          />
          Low to High
        </label>

        <label for="high-to-low-radio">
          <input
            type="radio"
            id="high-to-low-radio"
            name="sort-price"
            value="high-to-low"
            onChange={(e) => setSortQueryHandler(e)}
          />
          High to Low
        </label>
      </div>
    </div>
  );
};
