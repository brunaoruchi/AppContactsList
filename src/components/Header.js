import React from 'react';
import {View, Text } from 'react-native';

//Stateful
// class Header extends React.Component{
//   render(){
//     return (
//       <View>
//         <Text> Aqui é o nosso header </Text>
//       </View>
//     );
//   }
// }

//Stateless component
const Header = (props) => (
  <View>
    <Text>Aqui é o nosso header</Text>
  </View>
);

export default Header;