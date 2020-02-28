import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import Logout from '../Signout'
import { ScrollView } from 'react-native-gesture-handler';

export default function Pokemon ( route ) {
  
    const {pokemonId} = route.navigation.state.params;
    const {pokemonName} = route.navigation.state.params;

    return (
        <View>
          <Logout/>
           <Avatar
                size="large"
                source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png` }}
            ></Avatar>
           <Text>ID Pokemon : {JSON.stringify(pokemonId)}</Text>
           <Text>Nom : {JSON.stringify(pokemonName)}</Text>
        </View>
    )
}