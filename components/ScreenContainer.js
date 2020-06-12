import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { connect } from 'react-redux';

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { purple, black, white, lightPurp, dark } from '../utils/colors';

// You can import from local files
import Dashboard from './Dashboard';
import AddDeck from './AddDeck';
import DeckView from './DeckView';
import AddCard from './AddCard';
import Quiz from './Quiz';


const Tabs = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  },
}, {
  tabBarOptions: {
      activeTintColor: purple,
      style: {
        height: 60,
        backgroundColor: white,
        padding: 5,
      }
  }
});

const Nav = createStackNavigator(
  {
    Home: Tabs,
    DeckView: DeckView,
    AddCard: AddCard,
    AddDeck: AddDeck,
    Quiz: Quiz
  },
  {	
  	initialRouteName: 'Home',
    navigationOptions: {
      headerTintColor: white,
      headerStyle: { backgroundColor: purple }
    }
  }
);


const Container = createAppContainer(Nav);

export default Container;