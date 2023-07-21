import { createContext, useReducer } from "react";
 export const CountContext= createContext();
export const reducer=(state, action)=>{
    switch(action){
    }
} 
const initialState = {
    count: 0
}
 export const CountContextProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CountContext.Provider value={{state, dispatch}}>{{children}}
        </CountContext.Provider>
    )
 }