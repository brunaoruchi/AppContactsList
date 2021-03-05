import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import capitalizeFirstLetter from '../util/capitalizeFirstLetter';

const PeopleListItem = props => {
  const {person} = props;
  const {title, first, last} = person.name;

  return(
    <View style={styles.line}>
      <Text style={styles.lineText}>{capitalizeFirstLetter(title) + " " + capitalizeFirstLetter(first) + " " + capitalizeFirstLetter(last)}</Text>
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