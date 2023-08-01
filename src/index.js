import React from "react";
import ReactDOM from "react-dom";
import {StrictMode} from 'react';
import "./index.css";
import App from "./App";
import {makeServer} from "./server";
import {AppContext, AppContextProvider} from "./Components/CountContex";

// Call make Server
makeServer();
ReactDOM.render (
    <StrictMode>
        <AppContextProvider>
            <App/>
        </AppContextProvider>
    </StrictMode>,
    document.getElementById("root")
);
