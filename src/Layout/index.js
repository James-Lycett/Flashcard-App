import React from "react";
import { Route, Switch } from "react-router-dom"
import Header from "./Header";
import Home from "./Home/Home"
import CreateDeck from "./Home/CreateDeck";
import Deck from "./Deck/Deck";
import Study from "./Study/Study"
import Edit from "./Edit/Edit";
import AddCard from "./AddCard/AddCard";
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
          <Route exact path="/decks/new" >
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId" >
            <Deck />
          </Route>                
          <Route path="/decks/:deckId/study">
            <Study/>
          </Route>                     
          <Route path="/decks/:deckId/edit">
            <Edit />
          </Route>
          <Route path="/decks/:deckId/cards/new" >
            <AddCard />
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
