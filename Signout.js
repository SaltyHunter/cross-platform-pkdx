import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import * as firebase from "firebase";

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
                <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
                    <Text style={{color: "black", fontWeight:"500"}}>Deconnexion</Text>              
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