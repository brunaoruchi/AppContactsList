import React from 'react';
import {View} from 'react-native';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component{
  
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }
  
  //É chamado apenas uma única vez quando renderizado a tela
  componentDidMount(){
    axios
    .get('https://randomuser.me/api/?nat=br&results=20')
    .then(response => {
      //destruct = recupera cada usuário
      const {results} = response.data;
      this.setState({
        people: results
      });
    });
  }

  render() {
    // this.props.navigation.navigate(Chave da página, state)
    
    return (
      <View>
        <PeopleList 
          people={this.state.people} 
          onPressItem ={(parameters) => this.props.navigation.navigate('PersonDetail', parameters)}
        />
      </View>
    );
  }
}
