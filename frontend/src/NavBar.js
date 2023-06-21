import React from 'react';
import {NavLink} from 'react-router-dom'
import './App.css';

const NavBar = () => {
    return (
        <div className='Nav'>
            <NavLink exact path to="/"><button>Yodlr</button></NavLink>
            <NavLink exact path to="/signup"><button>Register</button></NavLink>
            <NavLink exact path to="/users"><button>Admin</button></NavLink>
        </div>
    );
}

export default NavBar;