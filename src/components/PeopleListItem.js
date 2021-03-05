import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PeopleListItem = props => {
  const {person} = props;

  return(
    <View style={styles.line}>
      <Text style={styles.lineText}>{person.name.first}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems:'center',
    flexDirection: 'row',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
  }
})


export default PeopleListItem;