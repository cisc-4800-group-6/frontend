import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";

export const API_URL = "https://nyc-jobs-finder-cisc-4800.azurewebsites.net";
// export const API_URL = "http://localhost:8080";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
