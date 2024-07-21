import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.css";
import "./assets/styles/bootstrap.custom.css";
import { Provider } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { HelmetProvider } from "react-helmet-async";
import store from "./store.js";
// import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <App />
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
