import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import SignupFormPage from "./components/SignupFormPage";
import ListingIndexPage from "./components/ListingIndexPage"
import ListingForm from "./components/ListingFormPage";
import ListingShowPage from "./components/ListingShowPage";

function App() {  
  return (
    <div className="container py-3">
    <Navigation />
      {/* <Route exact path="/">
        <h1>Main Page</h1>
      </Route> */}
      <Route path="/signup">
        <SignupFormPage />
      </Route>

      <Route exact path="/">
        <ListingIndexPage />
      </Route>
      <Route path="/listings/new">
        <ListingForm />        
      </Route>

      {/* <Route path="/listings/:listingId">
        <ListingShowPage />
      </Route> */}


    </div>
  );
}

export default App;
