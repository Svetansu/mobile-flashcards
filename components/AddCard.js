import React,{ Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { white, orange, green, red, purple, dark, blue } from '../utils/colors';
import { addCardToDeck } from '../utils/api';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import { Text, View, TouchableOpacity, StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';

class AddCard extends Component {

  state = {
    question: '',
    answer: '',
  }

  submitCard = (deck) => {
    const { question, answer } = this.state;

    if(question && answer) {
      this.props.dispatch(addCard({ question, answer, deck }))
      addCardToDeck(deck, { question, answer })
      this.setState({ question: '', answer: '' })
      this.props.navigation.dispatch(NavigationActions.back({ key: null }))
    } 
  }

  render() {
    const deckName = this.props.navigation.state.params.entryId;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='padding' style={styles.card}>
          <Text style={styles.title}>Question:</Text>
          <TextInput style={styles.input}
            onChangeText={(question) => this.setState({ question: question })}
            value={this.state.question}
            ></TextInput>

          <Text style={styles.title}>Answer:</Text>
          <TextInput style={styles.input}
            onChangeText={(answer) => this.setState({ answer: answer })}
            value={this.state.answer}
            ></TextInput>
          <TouchableOpacity style={styles.submitBtn} onPress={() => this.submitCard(deckName)}>
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>   
        </KeyboardAvoidingView>
          
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
  card: {
    flex: 1,
    padding: 15,
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
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  mainText: {
    fontSize: 35,
    color: white,
    marginTop: 40,
    textAlign: 'center'
  },
  subText: {
    fontSize: 15,
    color: white,
  },
  title: {
    fontSize: 30,
    color: white,
  },
  submitBtn: {
    margin: 20,
    padding: 10,
    backgroundColor: green,
    borderRadius: 7,
  },
  input: {
    width: 250,
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    backgroundColor: white,
    margin: 20,
    borderRadius: 7
  }
});


export default connect()(AddCard);