import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-toastify/ReactToastify.css";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./store.js";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);
