import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Line = ( {label, content} ) => {
  return(
    <View style={styles.line}>
      <Text style={styles.cell}>{label}</Text>
      <Text style={styles.cell}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default Line;