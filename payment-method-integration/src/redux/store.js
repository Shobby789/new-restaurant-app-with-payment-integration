import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice/cartSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
// import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import authreducer from "./authSlide/authSlice";

const persistConfig = {
  key: "root",
  storage,
};

const authPersistConfig = {
  key: "auth",
  storage,
};
const cart_Reducer = persistReducer(persistConfig, cartReducer);
const persistAuthReducer = persistReducer(authPersistConfig, authreducer);

export const store = configureStore({
  reducer: {
    cartItems: cart_Reducer,
    auth: persistAuthReducer,
    // middleware: [thunk],
  },
});

export const persistor = persistStore(store);
