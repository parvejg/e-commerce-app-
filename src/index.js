import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { appContext, AppContextProvider } from "./Components/CountContex";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
    <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
