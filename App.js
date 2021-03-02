import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Header from './src/components/Header';

export default class App extends Component{
  renderList(){
    const names = ['José', 'João', 'Maria', 'Pedro'];

    const textElements = names.map(name =>{
      return <Text>{name}</Text>
    });
    return textElements;
  }

  render() {
    return (
      <View>
        <Header label={'Contatos'} />
        { this.renderList() }
      </View>
    );
  }
}
