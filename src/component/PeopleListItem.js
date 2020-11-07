<<<<<<< HEAD
import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {toUpperFirst} from '../util'
=======
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { toUpperFirst } from '../util'
 
const PeopleListItem = props => {
>>>>>>> 1534e5aa2f6d1550ab8c1ec9946a785b47f80eb1

const PeopleListItem = props => {
    const { people, onPressItemDetails } = props
    const { title, first, last } = people.name

    return(
        <TouchableOpacity onPress={() => {
            onPressItemDetails(people)
        }}>
            
            <View style={style.line}>
                <Image style={style.avatar} source={{uri: people.picture.thumbnail}} />
                <Text style={style.lineText} key={first}>
                {`${
                        toUpperFirst(title)
                    } ${
                        toUpperFirst(first)
                    } ${
                        toUpperFirst(last)
                    }`}
                </Text>
            </View>

        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
        line: {
            height:60,
            borderBottomWidth: 1,
            borderBottomColor: '#bbb',
            alignItems: 'center',
            flexDirection: 'row'
        },
        avatar: {
            aspectRatio: 1,
            marginLeft: 10,
            flex: 1,
            borderRadius: 50
        },
        lineText: {
            fontSize: 20,
            paddingLeft: 20,
            flex: 7
        }
    }
)
export default PeopleListItem