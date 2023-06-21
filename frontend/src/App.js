import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Admin from './components/Admin';
import Signup from './components/Signup';
import Home from './components/Home';
import Edit from './components/Edit';
import NavBar from "./NavBar";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar />
       <Switch>
          <Route exact path="/admin"><Admin /></Route>
          <Route exact path="/signup"><Signup /></Route>
          <Route exact path="/"><Home /></Route>
          {/* <Route exact path="/:id"><Edit /></Route> */}
          <Redirect to="/"></Redirect>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
