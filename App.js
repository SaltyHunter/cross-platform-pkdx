import Pokedex from './Mobile/Pokedex'
import Pokemon from './Mobile/Pokemons';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen.js'
import RegisterScreen from './screens/RegisterScreen'

import * as firebase from 'firebase'
import Logout from './Signout';

var firebaseConfig = {
  apiKey: "AIzaSyDWU0llU8irjBkXlTitdGmko1JemAWbyc4",
  authDomain: "pokedex-831af.firebaseapp.com",
  databaseURL: "https://pokedex-831af.firebaseio.com",
  projectId: "pokedex-831af",
  storageBucket: "pokedex-831af.appspot.com",
  messagingSenderId: "856793459134",
  appId: "1:856793459134:web:0847a4a4dcb8d717a231ef",
  measurementId: "G-KEFE9N7X3F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const AppStack = createStackNavigator({
  Pokedex : Pokedex,
  Pokemons : Pokemon,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading"
    }
  )
);

