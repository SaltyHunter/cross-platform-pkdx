import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

export function Nav() {

    return (
      <nav>
        <ul className="nav-links">
        <Link to ="/">
            <li>POKEDEX</li>
        </Link>
        <Link  to ="/Entraineur">
            <li>ENTRAINEUR</li>
        </Link>
        
        </ul>
      </nav>
    ) 
}

export default Nav;