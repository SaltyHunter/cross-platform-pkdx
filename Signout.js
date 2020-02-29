import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
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
                <TouchableOpacity style={{marginTop: 1, marginLeft:"88%"}} onPress={this.signOutUser}>
                    <Image style={{width:50, height:50}}
                    source={require('./assets/logout.png')}
                    />                
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
});