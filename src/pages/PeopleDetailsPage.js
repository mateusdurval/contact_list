import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PeopleDetails from '../component/PeopleDetails'

class PeopleDetailsPage extends React.Component {
  constructor(props){
      super(props)
      this.state = {
         "people": props.route.params.people
      }
  }

  render(){
    return (
      <View style={style.container}>
          <PeopleDetails people={this.state.people}/>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 35,
    backgroundColor: '#f1f1f1'
  },
  headerStyle: {
    flex: 1,
    height: 50,
    width: '100%',
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: 'center'
  },
  textTitle: {
    color: '#000000',
    fontSize: 20,
  }
})


export default PeopleDetailsPage