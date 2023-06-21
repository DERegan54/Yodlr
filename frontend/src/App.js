import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes/Routes';
import NavBar from "./NavBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar />
       <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
