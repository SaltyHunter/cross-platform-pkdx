import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css';



export default function Pokedex() {
    useEffect(() => {
        fetchPokedex();

    },[]);

    const [pokedex,setPokedex]=useState([]);

    const fetchPokedex = async () => {
        const data = await fetch(
            'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'
        );
        const pokedex = await data.json();
        console.log(pokedex)
        console.log(pokedex.results)
        setPokedex(pokedex.results);

};

function addIndex(pokedex){
    let i = 1
    pokedex = pokedex.map(function(element) {
        element.index = i
        i = i+1
        return element
    })
    console.log(pokedex) 
}
  return (
    <div>
        {addIndex(pokedex)}
        <h1>Pokedex</h1>
        {pokedex.map(pokemon =>(
            <p key={pokemon.name}>
                <li><Link to = {`/Pokemon/${pokemon.name}`}><p><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`}/></p>{pokemon.name}</Link></li>
            </p>
        ))} 
    </div>
  );
}
