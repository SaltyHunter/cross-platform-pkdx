import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native';
import Logout from '../Signout'

export default function Pokemon ( route ) {

    const {pokemonId} = route.navigation.state.params;
    const {pokemonName} = route.navigation.state.params;
    const {pokemonDetails} = route.navigation.state.params;
    const type2 = JSON.stringify(pokemonDetails.detail['_55'].types[1]) !== undefined ? JSON.stringify(pokemonDetails.detail['_55'].types[1].type.name) : 'nothing';


    return (   
    <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Logout/>
        <Image source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png` }} style={{ width: 180, height: 180 }}/>
            <View style={{ flex:2, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontWeight: 'bold', fontSize:30, textTransform:"uppercase"}}>N°{JSON.stringify(pokemonId)} {JSON.stringify(pokemonName)}</Text>
                <Text>Taille : {JSON.stringify(pokemonDetails.detail['_55'].height)}</Text>
                <Text>Poids : {JSON.stringify(pokemonDetails.detail['_55'].weight)}</Text>       
                <Text>Expérience de base : {JSON.stringify(pokemonDetails.detail['_55']['base_experience'])}</Text>
                <Text>Type 1 : {JSON.stringify(pokemonDetails.detail['_55'].types[0].type.name)}</Text>       
                <Text>Type 2 : {type2}</Text>
                <Text style={{ fontWeight: 'bold', textTransform:"uppercase"}}>STATS</Text>
                <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[0].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[0]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[0]['effort'])})</Text>
                <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[1].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[1]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[1]['effort'])})</Text>
                <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[2].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[2]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[2]['effort'])})</Text>
                <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[3].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[3]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[3]['effort'])})</Text>
                <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[4].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[4]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[4]['effort'])})</Text>
                <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[5].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[5]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[5]['effort'])})</Text>
                </View>
        </View>
    </ImageBackground>   
    )
}