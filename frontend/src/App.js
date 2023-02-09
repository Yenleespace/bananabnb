import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import SignupFormPage from "./components/SignupFormPage";
import ListingIndexPage from "./components/ListingIndexPage"

function App() {  
  return (
    <div className="container py-3">
    <Navigation />
      <Route exact path="/">
        <h1>Main Page</h1>
      </Route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>

      <Route exact path="/listings">
        <ListingIndexPage />
      </Route>
    </div>
  );
}

export default App;
