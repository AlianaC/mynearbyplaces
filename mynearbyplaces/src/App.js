import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Places from './components/Places.js';
import AddPlace from './components/AddPlace.js';
import Reviews from './components/Reviews';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/mynearbyplaces">
          <Home />
        </Route>
        <Route path="/places" render={props => <Places {...props} />}>
        </Route>
        <Route path="/addplace">
          <AddPlace />
        </Route>
        <Route path="/reviews" render={props => <Reviews {...props} />}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
