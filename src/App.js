import React from "react";
import StoreProvider from "./store";
import Authenticator from "./auth";
import Router from "./router";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StoreProvider>
        <Authenticator>
          <Router />
        </Authenticator>
      </StoreProvider>
    </ThemeProvider>
  );
}
