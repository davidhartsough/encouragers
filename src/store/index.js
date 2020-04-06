import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store";
import Loader from "../components/loaders/Loader";

const persistor = persistStore(store);

export default ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);
