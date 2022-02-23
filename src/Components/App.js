import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Header";
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";
import Notfound from "./Notfound";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route
          exact
          path="/signup"
          component={Signup}
        />
        <Route
          exact
          path="/signin"
          component={Signin}
        />
        <Route
          exact
          path="/home"
          component={Home}
        />
        <Route component={Notfound} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
