import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store";
import PageLoader from "../components/PageLoader";

const persistor = persistStore(store);

export default ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={<PageLoader />} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);
