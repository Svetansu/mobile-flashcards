import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { getData } from '../utils/api';
import { connect } from 'react-redux';
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions';
import { orange, white, purple, lightPurp, dark, black, blue } from '../utils/colors';
import { getCardsLength } from '../utils/helpers';

class Dashboard extends Component {
  
  componentDidMount() {
    getDecks()
    .then(decks => this.props.receiveAll(decks))
  }
  
  render() {

    const { decks } = this.props;

    return (
      <ScrollView style={styles.container}> 
        {Object.keys(decks).map((a) => {
          const { title, questions } = decks[a];
          return (
            <View key={a} style={styles.card}>
              <Text style={styles.cardText}>{title}</Text>
              <Text style={styles.subText}>{questions ? getCardsLength(questions) : null}</Text>

              <View style={styles.btncontainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView', {entryId: a})} style={styles.submitBtn}>
                  <Text style={{color: white, textAlign: 'center', fontSize: 20}}>
                    View
                  </Text>
                </TouchableOpacity>
              </View>
              
            </View>
          )
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 5
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dark,
    margin: 8,
    height: 200,
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,0.34)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  cardText: {
    fontSize: 30,
    color: white,
  },
  subText: {
    fontSize: 20,
    color: white,
  },
  submitBtn: {
    margin: 12,
    padding: 5,
    width: 100,
    backgroundColor: blue,
    borderRadius: 7,
  },
});

function mapDispatchToProps (dispatch) {
  return {
    receiveAll: (decks) => dispatch(receiveDecks(decks))
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

//export default Dashboard;
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)