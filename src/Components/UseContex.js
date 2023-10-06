import { createContext, useReducer } from "react";

export const AppContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "Get_wishItem":
      return {
        ...state,
        countWishItem: action.payload,
      };
    case "Get_cartItem":
      return {
        ...state,
        cartItemCount: action.payload,
      };
    case "Delete_wishItem":
      return {
        ...state,
        deleteWishListItem: action.payload,
      };
    case "search_query":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "low-to-high":
      return {
        ...state,
        searchPrice: action.payload,
      };
    case "select-a-category":
      return {
        ...state,
        selectCategory: action.payload,
      };
    case "SelectedCategories":
      return {
        ...state,
        selectedCategories: action.payload,
      };
    case "sortQuery":
      return {
        ...state,
        sortQuery: action.payload,
      };
    case "SelectedRating":
      return {
        ...state,
        selectedRating: action.payload,
      };

    default:
      return state;
  }
};
const initialState = {
  countWishItem: 0,
  cartItemCount: 0,
  deleteWishListItem: 0,
  searchQuery: "",
  searchPrice: "",
  selectCategory: "",
  selectedCategories: [],
  sortQuery: "",
  selectedRating: "",
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}{" "}
    </AppContext.Provider>
  );
};
export const useAppContex = () => {
  return createContext(AppContext);
};
