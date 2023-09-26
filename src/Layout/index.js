import React from "react";
import { Route, Switch } from "react-router-dom"
import Header from "./Header";
import Home from "./Home/Home"
import View from "./View/View"
import Study from "./Study/Study"
import NotFound from "./NotFound";


function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/view">
            <View />
          </Route>
          <Route path="/study">
            <Study/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
