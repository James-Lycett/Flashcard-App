import React from "react";
import { Route, Switch } from "react-router-dom"
import Header from "./Header";
import Home from "./Home/Home"
import Deck from "./Deck/Deck";
import Study from "./Study/Study"
import CreateDeck from "./Home/CreateDeck";
import Edit from "./Edit/Edit";
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
          <Route path="/decks/:deckId/study">
            <Study/>
          </Route>
          <Route exact path="/decks/new" >
            <CreateDeck />
          </Route>     
          <Route exact path="/decks/:deckId" >
            <Deck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <Edit />
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
