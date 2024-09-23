import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: counterReducer,
  },
});

export default store;
