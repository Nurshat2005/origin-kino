import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Rootcontext from "./context/Rootcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Rootcontext>
    <BrowserRouter>
        <App />
    </BrowserRouter>
      </Rootcontext>
  </React.StrictMode>
);

