import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route, HashRouter } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import MyAccount from "./Components/Account/MyAccount";
import RegisterAccount from "./Components/Account/RegisterAccount";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/myaccount/register' element={<RegisterAccount />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
