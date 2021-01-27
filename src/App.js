import React from "react";
import HomePage from "./pages/home/home.page";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./styles/styles.scss";

// Components

function App() {
  return (
    <Router>
        <Route path="/:id" children={<HomePage />} replace/>
        <Route exact path="/"><HomePage /> </Route>

    </Router>
  );
}
export default App;
