import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { toUpperFirst } from '../util'
 
const PeopleDetails = props => {

    const { people } = props
    const { title, first, last } = people.name

    return (
        <View>
            <View style={style.header}>
                <Text style={style.TextInfo}>Informações do contato:</Text>

                <Image style={style.avatar} source={{uri: people.picture.thumbnail}}/>
                <Text style={style.linetext} key={first}>
                    {`${
                        toUpperFirst(first)
                    } ${
                        toUpperFirst(last)
                    }`}
                </Text>
                <Text>{people.email}</Text>
                <Text style={{marginTop: 15}}>{people.location.state} - {people.location.country}</Text>
            </View>

            <View style={style.phone}>
                <Text>
                    <Text style={{fontWeight: 'bold'}}>Telefone:</Text> {people.phone} | <Text style={{fontWeight: 'bold'}}>Celular:</Text> {people.cell}
                </Text>
            </View>

            <View style={style.body}>
                
                <Text style={{color: '#000', fontWeight: 'bold'}}>Endereço:</Text> 
                <Text>{people.location.street.name}, {people.location.street.number}, {people.location.city}</Text>
                <Text>{people.location.state} - {people.location.country}</Text>

                <Text style={{marginTop: 15}}>
                    <Text style={{color: '#000', fontWeight: 'bold'}}>Idade:</Text> <Text style={{color: '#000'}}>{people.dob.age} anos</Text>
                </Text>
                 
                
            </View>
        </View>
    )
}
 
const style = StyleSheet.create({
    header: {
        height: 255,
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    avatar: {
        marginTop: 25,
        width: 70,
        height: 70,
        aspectRatio: 1,
        marginLeft: 10,
        borderRadius: 10
    },
    phone: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 20,
        alignItems: 'center'
    },
    body: {
        alignItems: 'center',
        padding: 20,
    },
    info: {
        alignItems: 'center',
        marginBottom: 10
    },
    linetext: {
        fontSize: 25 ,
        marginTop: 25
    },
    
})
 
export default PeopleDetails