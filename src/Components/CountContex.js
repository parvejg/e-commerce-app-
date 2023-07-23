import { createContext, useReducer } from "react";
export const appContext = createContext();
export const reducer = (state, action) => {
  switch (action) {
  }
};
const initialState = {
  count: 0,
};
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <appContext.Provider value={{ state, dispatch }}>
      { children }
    </appContext.Provider>
  );
};
