import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CountContext } from "./Components/CountContex";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CountContext>
    <App />

    </CountContext>
  </React.StrictMode>,
  document.getElementById("root")
);
