import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
 } from 'react-router-dom';
 import Home from './pages/Home/Home';
 import Favourites from './pages/Favourites/Favourites';
 import Settings from './pages/Settings/Settings';
 import Menu from './Components/Menu/Menu';

const App=() => {
  return (
    <Router>
      <main>
        <Menu/>
        <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/Favourites" exact>
           <Favourites/>
        </Route>
        <Route path="/Settings" exact>
          <Settings/>
        </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  )
}

export default App;
