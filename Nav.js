import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

export function Nav() {

    return (
      <nav>
        <ul className="nav-links">
        <Link to ="/">
            <li>HOME</li>
        </Link>
        <Link  to ="/Pokemon">
            <li>POKEDEX</li>
        </Link>
        
        </ul>
      </nav>
    ) 
}

export default Nav;