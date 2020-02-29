import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import Logout from '../Signout'
import { ScrollView } from 'react-native-gesture-handler';

export default function Pokemon ( route ) {

    const {pokemonId} = route.navigation.state.params;
    const {pokemonName} = route.navigation.state.params;
    const {pokemonDetails} = route.navigation.state.params;
    const type2 = JSON.stringify(pokemonDetails.detail['_55'].types[1]) !== undefined ? JSON.stringify(pokemonDetails.detail['_55'].types[1].type.name) : 'nothing';


    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Logout/>
      <Avatar
          size="large"
          source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png` }}
      ></Avatar>
      <Text>ID: {JSON.stringify(pokemonId)}</Text>
      <Text>Name: {JSON.stringify(pokemonName)}</Text>
      <Text>Height: {JSON.stringify(pokemonDetails.detail['_55'].height)}</Text>
      <Text>Weight: {JSON.stringify(pokemonDetails.detail['_55'].weight)}</Text>       
      <Text>Base Experience: {JSON.stringify(pokemonDetails.detail['_55']['base_experience'])}</Text>
      <Text>Type 1: {JSON.stringify(pokemonDetails.detail['_55'].types[0].type.name)}</Text>       
      <Text>Type 2: {type2}</Text>
      
      <ScrollView>
          <Text>STATS:</Text>
          <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[0].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[0]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[0]['effort'])})</Text>
          <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[1].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[1]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[1]['effort'])})</Text>
          <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[2].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[2]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[2]['effort'])})</Text>
          <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[3].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[3]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[3]['effort'])})</Text>
          <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[4].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[4]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[4]['effort'])})</Text>
          <Text>{JSON.stringify(pokemonDetails.detail['_55'].stats[5].stat.name)} : {JSON.stringify(pokemonDetails.detail['_55'].stats[5]['base_stat'])} (EP:{JSON.stringify(pokemonDetails.detail['_55'].stats[5]['effort'])})</Text>

      </ScrollView>        
  </View>
    )
}