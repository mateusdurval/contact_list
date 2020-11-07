import React from 'react'
<<<<<<< HEAD
import {View, Text} from 'react-native'

export default class PeopleDetailsPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            "people": props.route.params.people
        }
    }

    render(){
        return(
            <View>
                <Text>{this.state.people.name.last}</Text>
            </View>
        )
    }
}
=======
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
>>>>>>> 1534e5aa2f6d1550ab8c1ec9946a785b47f80eb1
