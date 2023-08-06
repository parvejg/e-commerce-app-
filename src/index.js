import React from "react";
import ReactDOM from "react-dom";
import {StrictMode} from 'react';
import "./index.css";
import App from "./App";
import {makeServer} from "./server";
import {AppContextProvider} from "./Components/UseContex";

// Call make Server
makeServer();
ReactDOM.render (<StrictMode>
    <AppContextProvider>
        <App/>
    </AppContextProvider>
</StrictMode>, document.getElementById("root"));
