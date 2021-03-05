import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from './src/components/Header';
import axios from 'axios';

export default class App extends Component{
  renderList(){
    axios
    .get('https://randomuser.me/api/?nat=br&results=5')
    .then(response => {
      //destruct = recupera cada usuario
      const {results} = response.data;
      const names = results.map(person => person.name.first);
      console.log(names);
    });
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
