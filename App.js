import { createStackNavigator, createAppContainer } from 'react-navigation';

import PeoplePage from './src/screens/PeoplePage';

const StackNavigator = createStackNavigator({
  'Main':{
    screen: PeoplePage
  }
}, {
  defaultNavigationOptions:{
    title: 'Contatos',
    headerTitleStyle: {
      color:'#ffffff',
      fontSize: 30,
      flexGrow: 1,
      textAlign: 'center',
    },
    headerStyle: {
      backgroundColor: '#6ca2f8',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5'
    }
  }
})

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;