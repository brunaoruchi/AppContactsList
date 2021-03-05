import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class PersonDetail extends React.Component {
  render(){

    const { person } = this.props.navigation.state.params;
    const picURL = person.picture.large;

    return(
      <View style={styles.container}>
        <Image source={{uri: picURL}} style={styles.avatar}/>
        <Text>
          Olá, página de detalhes :)
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // line: {
  //   height: 60,
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#bbb',
  //   alignItems:'center',
  //   flexDirection: 'row',
  // },
  // lineText: {
  //   fontSize: 20,
  //   paddingLeft: 15,
  //   flex: 7
  // },
  container:{
    padding: 15
  },
  avatar:{
    aspectRatio: 1,
    borderRadius: 5
  }
})