import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import App from "./App";
import { StarredContextProvider } from "./context/starred-context";

ReactDOM.render(
  <StarredContextProvider>
    <App />
  </StarredContextProvider>,
  document.getElementById("root")
);
