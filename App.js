import Pokedex from './pokemon/Pokedex'
import Pokemon from './pokemon/Pokemons';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCtwhyNqtlx9voQBcW46wtl21vjDOqIadE",
  authDomain: "pokedex-96bc1.firebaseapp.com",
  databaseURL: "https://pokedex-96bc1.firebaseio.com",
  projectId: "pokedex-96bc1",
  storageBucket: "pokedex-96bc1.appspot.com",
  messagingSenderId: "324731372480",
  appId: "1:324731372480:web:9d005e4a2f946cdc087e25",
  measurementId: "G-73PK9J1LF2"
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