import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { saveNewDeck } from '../utils/api';
import { addDeck } from '../actions';
import { connect } from 'react-redux';
import { orange, white } from '../utils/colors';

class AddDeck extends Component {
  
  state = {
    text: ''
  }
  
  submitName = () => {
    const { text } = this.state;

    if(text) {
      saveNewDeck(text);
      this.props.dispatch(addDeck(text)); 
      this.props.navigation.navigate('DeckView', {entryId: text});
      this.setState({ text: '' });
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add New Deck Here</Text>
        <TextInput onChangeText={(text) => this.setState({ text: text })}
          value={this.state.text} style={styles.input}></TextInput>
        <TouchableOpacity onPress={this.submitName} style={styles.submitBtn}><Text style={{color: white, textAlign: 'center', fontSize: 20}}>Submit</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 40,
    borderRadius: 8
  },
  submitBtn: {
    borderWidth: 0.5,
    height: 50,
    width: 200,
    borderColor: '#d6d7d1',
    padding: 10,
    backgroundColor: orange,
    borderRadius: 7,
  },
  title: {
    fontSize: 30,
    color: '#333',
    textAlign: 'center'
  }
});

//export default AddDeck;
export default connect()(AddDeck)

