import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import RegistrationForm from "../Signup";
import Admin from '../Admin';
import Home from "../Home";


const Routes = () => {

  return (
    <div className="Routes">     
        <Switch>
          <Route exact path="/users"><Admin /></Route>
          <Route exact path="/signup"><RegistrationForm /></Route>
          <Route exact path="/"><Home /></Route>
        </Switch>       
    </div>
  );
}

export default Routes;