import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getData } from '../utils/api';
import { connect } from 'react-redux';
import { purple, white, red, orange, blue, dark, black, green } from '../utils/colors';
import ActionButton from './ActionButton';
import { getCardsLength } from '../utils/helpers';

class DeckView extends Component {
  render() {
    const { decks } = this.props;
    const deck = this.props.navigation.state.params.entryId;
    const questions = decks[deck].questions;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.mainText}>{decks[deck].title}</Text>
          <Text style={styles.subText}>{questions ? getCardsLength(questions) : null}</Text>

          <ActionButton styles={styles} text={'Add Card'} color={blue}
                        onPress={() => this.props.navigation.navigate('AddCard', { entryId: deck })} />
          {questions.length > 0 && <ActionButton styles={styles} text={'Start Quiz'} color={green}
                        onPress={() => this.props.navigation.navigate('Quiz', { entryId: deck })} />}
          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: white,
    padding: 15
  },
  iosBtn: {
    padding: 6,
    borderRadius: 7,
    height: 45,
    margin: 10,
    width: 170
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dark,
    margin: 8,
    height: 200,
    borderRadius: 20,
    shadowColor: 'rgba(0,0,0,0.34)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },
  mainText: {
    fontSize: 40,
    color: white,
  },
  subText: {
    fontSize: 30,
    color: white,
    marginBottom: 160
  }
});


function mapStateToProps (decks) {
  return {
    decks
  }
}


export default connect(mapStateToProps)(DeckView)
