import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeoplePage extends React.Component{
  
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      loading: false,
      error: false,
    };
  }
  
  //É chamado apenas uma única vez quando renderizado a tela
  componentDidMount(){
    this.setState({ loading: true })
    axios
    .get('https://randomuser.me/api/?nat=br&results=100')
    .then(response => {
      //destruct = recupera cada usuário
      const {results} = response.data;
      this.setState({
        people: results,
        loading: false
      });
    }).catch(error => {
      this.setState({
        error: true,
        loading: false,
      })
    });
  }

  render() {
    // this.props.navigation.navigate(Chave da página, state)  
    return (
      <View style={styles.container}>
        {
          this.state.loading ? <ActivityIndicator size="large" color="#CBCBCB" />
          :
          this.state.error ? <Text style={styles.error}>Erro ao carregar lista de contatos... :(</Text> :
          <PeopleList people={this.state.people} onPressItem ={(parameters) => this.props.navigation.navigate('PersonDetail', parameters)}
        />
        }
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    fontSize: 18,
    color:'red',
    alignSelf:'center'
  }
})