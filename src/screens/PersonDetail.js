import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class PersonDetail extends React.Component {
  render(){

    const { person } = this.props.navigation.state.params;
    const picURL = person.picture.large;

    return(
      <View style={styles.container}>
        <Image source={{uri: picURL}} style={styles.avatar}/>
        <View style={styles.detailContainer}>
          <View style={styles.line}>
            <Text style={styles.cell}>E-mail: </Text>
            <Text style={styles.cell}>{person.email}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 15
  },
  avatar:{
    aspectRatio: 1,
    borderRadius: 5
  },
  detailContainer: {
    backgroundColor: '#E2F9FF',
    marginTop: 20,
    elevation: 1,
    flexDirection: 'row'
  },
  line: {
    flexDirection: 'row',
    paddingTop: 3,
    borderWidth: 1,
    borderColor: "#C5C5C5"
  },
  cell:{
    paddingLeft: 5,
    fontSize: 16,
  }
})