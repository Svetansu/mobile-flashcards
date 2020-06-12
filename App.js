import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { connect } from 'react-redux';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';


import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { purple, black, white, dark } from './utils/colors';

// You can import from local files
import Dashboard from './components/Dashboard';
import AddDeck from './components/AddDeck';
import DeckView from './components/DeckView';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';
import { clearLocalNotification, setLocalNotification } from './utils/helpers';
// or any pure javascript modules available in npm
import Container from './components/ScreenContainer';


function MyStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


class App extends Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <MyStatusBar backgroundColor={black} barStyle='light-content'  />
          <Container />
        </View>
      </Provider>
    );
  }
}

export default App;
