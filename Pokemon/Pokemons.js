import React, { useEffect, useState } from 'react'
//import '../App.css';

export default function Pokemons(match) {
    useEffect(() => {
        fetchPokemons();
        console.log(match.match)
    },[]);

    const [pokemons,setPokemons]=useState([]);

    const fetchPokemons = async () => {
        const fetchPokemons = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${match.match.params.id}`
        );
        const pokemons = await fetchPokemons.json();
        console.log(pokemons)
        console.log(pokemons.abilities)
        console.log(pokemons.moves.index)
        console.log(pokemons.sprites)
        console.log(pokemons.sprites.front_default)
        setPokemons(pokemons);

        //setPokemonsA(pokemons.abilities);
};

  return (
    <div>
        <h1>{pokemons.name}</h1>
        <p><img id="pkt" src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${match.match.params.id}.png`}></img></p>
        <p>ID : {pokemons.id}</p>
        <p>XP : {pokemons.base_experience}</p>
        <p>Largeur : {pokemons.weight}</p>
        <p>Hauteur : {pokemons.height}</p>
        <p>Ordre : {pokemons.order}</p>
    </div>
  );
}

