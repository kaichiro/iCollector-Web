import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App/App";

ReactDOM.render(
  <App>{console.log(`Build or ReBuild at ${new Date()}`)}</App>,
  document.getElementById("root")
);

serviceWorker.unregister();
