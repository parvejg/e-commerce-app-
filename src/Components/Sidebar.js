import { Link } from "react-router-dom";
import "./Sidebar.css";
import { ImSearch } from "react-icons/im";
export const Sidebar = () => {
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
        <label for="categories-checkBox">
          <input type="checkBox" id="categories-checkBox" name="categories" />
          Men
        </label>
        <label for="categories-checkBox">
          <input type="checkBox" id="categories-checkBox" name="categories" />
          Weman
        </label>
        <label for="categories-checkBox">
          <input type="checkBox" id="categories-checkBox" name="categories" />
          Kids
        </label>
        <label for="categories-checkBox">
          <input type="checkBox" id="categories-checkBox" name="categories" />
          Electronices
        </label>
        <label for="categories-checkBox">
          <input type="checkBox" id="categories-checkBox" name="categories" />
          Mobile
        </label>
        <label for="categories-checkBox">
          <input type="checkBox" id="categories-checkBox" name="categories" />
          Plant
        </label>
      </div>
      <div className="sidebar-rating-wrapper">
        <h3>Rating</h3>
        <label for="rating4-radio">
          <input type="radio" id="rating4-radio" name="ratingBox" />4 Star &
          above
        </label>

        <label for="rating3-radio">
          <input type="radio" id="rating3-radio" name="ratingBox" />3 Star &
          above
        </label>
        <label for="rating2-radio">
          <input type="radio" id="rating2-radio" name="ratingBox" />2 Star &
          above
        </label>
        <label for="rating1-radio">
          <input type="radio" id="rating1-radio" name="ratingBox" />1 Star &
          above
        </label>
      </div>
      <div className="sort-price-wrapper">
        <h3>Sort by Price</h3>
        <label for="low-to-high-radio">
          <input type="radio" id="low-to-high-radio" name="ratingBox" />4 Star
          Low to High
        </label>

        <label for="high-to-low-radio">
          <input type="radio" id="high-to-low-radio" name="ratingBox" />3 Star
          High to Low
        </label>
      </div>
    </div>
  );
};
