import React from "react";
import StoreProvider from "./store";
import Authenticator from "./auth";
import Router from "./routes";

export default function App() {
  return (
    <StoreProvider>
      <Authenticator>
        <Router />
      </Authenticator>
    </StoreProvider>
  );
}
