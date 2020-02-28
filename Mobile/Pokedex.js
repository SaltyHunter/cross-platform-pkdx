import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import Logout from '../Signout'

export default function Pokedex({ navigation }) {
    useEffect(() => {
        fetchPokedex();
    },[]);
    const [pokedex,setPokedex]=useState([]);
    const fetchPokedex = async () => {
        const data = await fetch(
            'https://pokeapi.co/api/v2/pokemon?limit=10'
        );
        const pokedex = await data.json();
        console.log(pokedex.results);
        setPokedex(pokedex.results);
};
function getDetailPokemon(linkPokemon) {
    return fetch(linkPokemon)
        .then((response) => response.json())
        .then((responseJson) => {
        return responseJson;
        })
        .catch((error) => {
        console.error(error);
        });
}
function addIndex(pokedex){
    let i = 1
    pokedex = pokedex.map(function(element) {
        element.detail = getDetailPokemon(element.url)
        element.index = i
        element.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
        i = i+1
        return element
    })
    
}
  return (
        <ScrollView>
        {addIndex(pokedex)}
        <Logout/>
        <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>Pokedex</Text>
        {pokedex.map(pokemon =>(
            <View>
                
                <Text>{pokemon.index}:{pokemon.name}</Text>
                <Avatar
                    size="large"
                    source={{ uri: pokemon.image }} 
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('Pokemons', {
                        pokemonId:pokemon.index,
                        pokemonName: pokemon.name,
                        pokemonDetail: pokemon,
                        pokemonWeight: pokemon.results
                    })}
                />
            </View>
        ))} 
        </ScrollView>
  );
}