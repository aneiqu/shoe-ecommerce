import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MyAccount from "./Components/Account/MyAccount";
import OrdersContentLarge from "./Components/Account/PanelLarge/Content/ContentLarge/OrdersContentLarge";
import OverviewContentLarge from "./Components/Account/PanelLarge/Content/ContentLarge/OverviewContentLarge";
import ReturnsContentLarge from "./Components/Account/PanelLarge/Content/ContentLarge/ReturnsContentLarge";
import RegisterAccount from "./Components/Account/RegisterAccount";
import Cart from "./Components/Cart/Cart";
import ProductPage from "./Components/Re-usable/Prodcuts/ProductPage/ProductPage";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/cart' element={<Cart />} />
        <Route
          path='/myaccount'
          element={
            <MyAccount
              curActive={"Overview"}
              curContent={<OverviewContentLarge />}
            />
          }
        />
        <Route path='/myaccount/register' element={<RegisterAccount />} />
        <Route
          path='/myaccount/orders'
          element={
            <MyAccount
              curActive={"Orders"}
              curContent={<OrdersContentLarge />}
            />
          }
        />
        <Route
          path='/myaccount/returns'
          element={
            <MyAccount
              curActive={"Returns"}
              curContent={<ReturnsContentLarge />}
            />
          }
        />
        <Route
          path='/products/:productName/:productId'
          element={<ProductPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
