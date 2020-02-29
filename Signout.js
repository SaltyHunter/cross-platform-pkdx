import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import * as firebase from "firebase";
import { Avatar } from 'react-native-elements';

export default class Logout extends React.Component {
    state = {
        name: "",
        email: "",
        displayName: "",
    };

    componentDidMount() {
        const {name, email, displayName} = firebase.auth().currentUser;

        this.setState({name, email, displayName});
    }

    signOutUser = () => {
        firebase.auth().signOut();
    };
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{marginTop: 1, marginLeft:"90%"}} onPress={this.signOutUser}>
                    <Avatar
                    source={require('./assets/logout.png')}
                    />                
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent : "center",
        alignItems: "center",
    }
});