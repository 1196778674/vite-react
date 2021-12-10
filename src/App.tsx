import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.less";
import Layout from "./layout/Layout";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
