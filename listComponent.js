import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Image, Card, ListItem, Button, Icon } from 'react-native-elements'

export default function ListComponent ({ navigation }) {
    return (
        <ScrollView style={styles.container}>
           <Button
                title="Go to Details"
                onPress={() => navigation.navigate('detail')}
                /> 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
});
  
