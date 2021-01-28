import React from "react";
import HomePage from "./pages/home/home.page";
import MissingPage from "./pages/404/404.page";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./styles/styles.scss";

// Components

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/404"><MissingPage /> </Route>
        <Route path="/:id" children={<HomePage />} replace/>
        <Route exact path="/"><HomePage /> </Route>
      </Switch>

    </Router>
  );
}
export default App;
