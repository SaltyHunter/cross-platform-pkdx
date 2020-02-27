import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import Pokedex from './Pokedex'
import './App.css';
import Pokemons from './Pokemons';

export default function App() {
  return (
    <Router>
      <Nav />
      <div className="App"> 
      <Switch>
        <Route path="/" exact component={home}/>
        <Route path="/Pokemon/:name" component={Pokemons}/>
        </Switch>
      </div>
    </Router>
  );
}
const home = () => (
  <Pokedex/>
)

