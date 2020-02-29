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
        element.image = `https://pokeres.bastionbot.org/images/pokemon/${i}.png`
        i = i+1
        return element
    })
    
}
  return (
      
        <ScrollView>
        {addIndex(pokedex)}
        <Logout/>
        {pokedex.map(pokemon =>(
            <View>
                <Avatar
                    size="large"
                    source={{ uri: pokemon.image }} 
                    activeOpacity={1.0}
                    onPress={() => navigation.navigate('Pokemons', {
                        pokemonId:pokemon.index,
                        pokemonName: pokemon.name,
                        pokemonDetails: pokemon,
                    })}
                />
                <Text style={{ textTransform:"uppercase"}}>{pokemon.name}</Text>
            </View>
        ))} 
        </ScrollView>
  );
}