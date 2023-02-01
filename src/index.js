import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Routes>
    <Route element={<App />}>
      
    </Route>
  </Routes>,
  document.getElementById("root")
);
