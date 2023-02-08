import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import SignUpForm from './components/SignUpFormModal/SignUpForm';

function App() {
  return (
    <div className="container py-3">
      <Navigation />
      <Route>
        <h1>Main Page</h1>
      </Route>
      <Route>
        <SignUpForm />
      </Route>
    </div>
  );
}

export default App;
