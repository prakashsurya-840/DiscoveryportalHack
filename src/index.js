import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ToolBar from "./Component/ToolBar";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <main>
    <ToolBar />
  </main>,
  rootElement
);
