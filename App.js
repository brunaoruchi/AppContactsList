import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from './src/components/Header';
import axios from 'axios';

export default class App extends Component{
  
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }
  
  //É chamado apenas uma única vez quando renderizado a tela
  componentDidMount(){
    axios
    .get('https://randomuser.me/api/?nat=br&results=5')
    .then(response => {
      //destruct = recupera cada usuario
      const {results} = response.data;
      this.setState({
        people: results
      });
    });
  }

  renderList(){
    const textElements = this.state.people.map(person => {
      const {first} = person.name;

      return <Text key={first}>{first}</Text>
    })
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
