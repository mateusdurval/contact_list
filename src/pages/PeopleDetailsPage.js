import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const PeopleDetailsPage = props => {
    
    const { name } = props
    console.log("Nome: " + name)

    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: 35,
        padding: 40,
        justifyContent: 'space-between',
      },
})

export default PeopleDetailsPage