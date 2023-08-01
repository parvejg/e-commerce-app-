import {createContext, useReducer} from "react";
export const AppContext = createContext();
export const reducer = (state, action) => {
    switch (action) {}
};
const initialState = {
    count: 0
};
export const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={
            {state, dispatch}
        }>
            {children} </AppContext.Provider>
    );
};
