import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./Features/CartSlice";
import userReducer from "./Features/UserSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    userState: userReducer,
  },
});
