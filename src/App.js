import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage, CompetitionPage } from "./pages/index";
import { CssBaseline, createTheme, ThemeProvider } from "@material-ui/core";

const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/competition/:id" component={CompetitionPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};
